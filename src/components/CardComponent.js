import React from 'react';

class CardComponent extends React.Component {
    constructor() {
      super();
  
    }
  
  
    render() {
      let { movieProps } = this.props;
      const imageUrl = "https://image.tmdb.org/t/p/w500/";
      const posterPath = movieProps.poster_path;
      //console.log(imageUrl+posterPath);
  
      //let {key} = this.props.key;
      return (
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="Card hovereffect">
            <img src={imageUrl + posterPath} className="card-img-top" alt="image"></img>
            <div className="overlay">
              <h2 className="card-title">{movieProps.title}</h2>
  
            </div>
  
          </div>
        </div>
  
  
      );
  
  
    }
  }

export default CardComponent