import React, { Component } from 'react'
import spinner from "./spinner.gif";

{/* creating a loading gif whenevr there is a page load */}

/* CLASS BASED COMPONENTS */


 {/*export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className='my-3' src={spinner} alt="loading" />
      </div>
    )
  }
}

export default Spinner 
*/}


/* Functional based components */

const  Spinner = ()=> {
    return (
      <div className="text-center">
        <img className='my-3' src={spinner} alt="loading" />
      </div>
    )
  }


export default Spinner;