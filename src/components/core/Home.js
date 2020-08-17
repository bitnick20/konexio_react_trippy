import React from 'react';
import Api from '../../utils/Api';
import Card from '../city/Card';



class Home extends React.Component {
    render () {
        console.log("cmp/core/Home :")
        if(this.props.cities.length > 0) {
            return (
                <div>
                    <Card 
                    name={this.props.cities[0].name}
                    slug={this.props.cities[0].slug}
                    source={this.props.cities[0].source}/>
                </div>
            ); 
            
        }
        return (
            <div>
                <p>Test</p>
            </div>
        );

            // return (
            //     <div>
            //         <Card />
            //     </div>
            // );
    }

}

export default Home;