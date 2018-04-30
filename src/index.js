import React from 'react';
import {render} from 'react-dom';
import {Header} from './header';
import {Footer} from './footer';
import UniqueId from 'react-html-id';
import './index.css';

class App extends React.Component{
	constructor(){
		super();
		UniqueId.enableUniqueIds(this);
		this.state={
			users:[
			{id:this.nextUniqueId(), name:'John', age:70},
			{id:this.nextUniqueId(), name:'JOB', age:30},
			{id:this.nextUniqueId(), name:'BOB', age:40},
			{id:this.nextUniqueId(), name:'Catlin', age:10},
			{id:this.nextUniqueId(), name:'jinping', age:20},
			{id:this.nextUniqueId(), name:'jimmy', age:50}
			]
		}
	}


	deleteData = (id,e) =>{

		const users = Object.assign([], this.state.users);
		users.splice(id,1);
		this.setState({
			users:users
		})

	}

	updata = (id,e) => {
		const index = this.state.users.findIndex((user) => {
			return user.id === id
		});

		const user = Object.assign({}, this.state.users[index]);
		user.name = e.target.value;
		const users = Object.assign([], this.state.users);
		users[index] = user;

		this.setState({
			users:users
		})

	}



	render(){
		return(
<div className="container">
	<div className="row">
		<div className="col-xs-12">
			 <h1>Example of ToDo App</h1>
			{
				this.state.users.map((user,id) => {
					return <Header key={id} name={user.name} age={user.age} delData={this.deleteData.bind(this,id)} updateData={this.updata.bind(this, user.id)}/>

				})
			
			}
		</div>
		<Footer us={'name'}/>
		<Footer/>

	</div>
</div>
		)
	}
}

render(<App />, document.getElementById('root'));

