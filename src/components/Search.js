import React from 'react';

class Search extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        searchInputState: "",
      }
    }
  
    //Class property (when assigning a handler to the onSubmit event the event itself is passed as a 
    //parameter to the handdler)
    onSubmitHandler = event => {
      event.preventDefault();
      const searchValue = this.searchValue.value;
  
      this.setState({
        searchInputState: searchValue,
      });
  
      /*  executem el metode del parent que li hem passat com a props al fill */ 
      this.props.greetHandler(searchValue);
    }
  
    render() {
      // const filterText = this.props.filterText;
  
      return (
        <div className="row">
          <form className="form-inline" onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Search in our database: </label>
              <input
                type="text"
                className="form-control m-5"
                id="formGroupExampleInput"
                placeholder="Search"
                ref={input => this.searchValue = input}>
              </input>
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      );
    }
  }

  export default Search