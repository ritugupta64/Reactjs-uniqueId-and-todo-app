import React from 'react';
import {Fragment} from 'react';


export class Footer extends React.Component{
  render(){

  	let content = '';

  	if(true){

  		content = <p>{this.props.us}</p>


  	}


    return(
     <Fragment>
         <h1>footer Goes here</h1>
         <h2>Fragment Example</h2>
         {this.props.us?content:'no'}
      </Fragment>  
    )
  }
}



