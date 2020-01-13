import React from 'react';

class ActorComponent extends React.Component {

    render() {
        let { ActorProps } = this.props;
        const imageUrl = "https://image.tmdb.org/t/p/w500/";
        const profile_path = ActorProps.profile_path;
        if (ActorProps.order < 5) {
            console.log("It is bigger", ActorProps.character);
            return (
                <div className="col-md-6 col-lg-3 mb-1">
                    <div className="Card ">
                        <img src={imageUrl + profile_path} className="card-img-top" alt="imageFilm"></img>
                        <p>{ActorProps.name}</p>
                    </div>
                </div>
            );
        }
        else { return (null); }
    }
}

export default ActorComponent