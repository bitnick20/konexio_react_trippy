import React from 'react';
import Api from '../../utils/Api';
import Card from '../city/Card';
import Gallery from '../city/Gallery';




class Home extends React.Component {
    render () {
        const {
            cities
        } = this.props

        // console.log("src/components/core/Home#render :", this.props);
        if(this.props.cities.length > 0) {
            return (
                <div>
                    {cities.map((city) => {
                        return (
                        <Card
                            name={city.name} 
                            slug={city.slug}
                            source={city.source}
                        />
                        );
                    })} 
                </div>
            ); 
        }
        return (
            <div>
                <p>Rien à afficher !</p>
            </div>
        );
    }

}

export default Home;