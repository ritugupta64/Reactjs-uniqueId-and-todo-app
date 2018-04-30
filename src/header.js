import React from 'react';
export class Header extends React.Component{
render(){
return(

<div className="page-header">
	
	
	<ul className="list-group">
		<li className="list-group-item">Name:: {this.props.name} Age:: {this.props.age}
			<div className="input-group" style={{width:'50%'}}>
				<span className="input-group-addon" id="sizing-addon2">@</span>
				<input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon2" onChange={this.props.updateData} />
			</div>
			<span onClick={this.props.delData} className="glyphicon glyphicon-remove" style={{float: 'right', cursor: 'pointer'}}></span>
		</li>
	</ul>
</div>


)
}
}