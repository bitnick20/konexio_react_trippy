import React from 'react';
import Api from '../../utils/Api';
import Card from '../city/Card';



class Home extends React.Component {
    render () {
        const {
            cities
        } = this.props

        // console.log("components/core/Home#render :", this.props);
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
                        )
                    })} 
                    {/* <Card 
                    name={this.props.cities[0].name}
                    slug={this.props.cities[0].slug}
                    source={this.props.cities[0].source}/> */}
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