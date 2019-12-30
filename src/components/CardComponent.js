import React from 'react';
import {Link} from 'react-router-dom';

class CardComponent extends React.Component {
  


  render() {
    let { movieProps } = this.props;
    const imageUrl = "https://image.tmdb.org/t/p/w500/";
    const posterPath = movieProps.poster_path;
    //console.log(imageUrl+posterPath);

    //let {key} = this.props.key;
    return (

      <div className="col-md-6 col-lg-3 mb-4">
        <Link to={`/detailpage/${movieProps.id}`}>
          <div className="Card hovereffect">
            <img src={imageUrl + posterPath} className="card-img-top" alt="imageFilm"></img>
            <div className="overlay">
              <h2 className="card-title">{movieProps.title}</h2>

            </div>

          </div>
        </Link>
      </div>


    );


  }
}

export default CardComponent