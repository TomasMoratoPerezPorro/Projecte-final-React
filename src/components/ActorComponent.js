import React from 'react';


class ActorComponent extends React.Component {



    render() {
        let { ActorProps } = this.props;

        
        return (
            <div className="p-2 centrar">
                <p>{ActorProps.character}</p>
            </div>
            
        );

    }
}

export default ActorComponent