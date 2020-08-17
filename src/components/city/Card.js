import React from 'react';

class Card extends React.Component {
    // constructor (props) {
    //     super(props);

    //     this.state = {
    //         name: '',
    //         source: 'http://via.placeholder.com/300x200',
    //         slug: ''
    //     }
    // }

    render () {
        console.log("test: ", this.props)
        const {
            name,
            source,
            slug
        } = this.props
        return (
            <div>
                <h3>{name}</h3>
                <h3>{slug}</h3>
                <img src={source}/>
            </div>
        );
    }
}

export default Card;