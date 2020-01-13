import React from 'react';

class Genre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genreState: "",
            selectedOption: "Comedies",
        }
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        const genreValue = this.state.selectedOption;
        console.log("You have submitted:", this.state.selectedOption);
        this.props.greetHandlerGenre(genreValue);
    };

    render() {
        return (
            <div className="col-4">
                <div className="buscador">
                    <p className="bold">Filter by Genre:</p>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-check ">
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="Comedies"
                                    checked={this.state.selectedOption === "Comedies"}
                                    onChange={this.handleOptionChange}
                                    className="form-check-input"
                                />
                                Comedies {/* 35 */}
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="Drama"
                                    checked={this.state.selectedOption === "Drama"}
                                    onChange={this.handleOptionChange}
                                    className="form-check-input"
                                />
                                Drama {/* 18 */}
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="Science Fiction"
                                    checked={this.state.selectedOption === "Science Fiction"}
                                    onChange={this.handleOptionChange}
                                    className="form-check-input"
                                />
                                Science Fiction {/* 878 */}
                            </label>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary mt-2" type="submit">FILTER</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Genre

