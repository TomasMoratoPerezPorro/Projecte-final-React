import React from 'react';

class Discover extends React.Component {

  

  //Class property (when assigning a handler to the onSubmit event the event itself is passed as a 
  //parameter to the handdler)
  onSubmitHandler = event => {
    event.preventDefault();
    /*  executem el metode del parent que li hem passat com a props al fill */
    this.props.greetParentDiscover();
  }

  render() {
    // const filterText = this.props.filterText;
    return (
      <div className="col-4">
        <div className="buscador">
          <p className="bold" htmlFor="formGroupExampleInput">Discover: </p>
          <form onSubmit={this.onSubmitHandler}>   
            <button type="submit" className="btn btn-primary mt-2">DISCOVER</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Discover