import React from 'react';
import Api from '../../utils/Api';



class Home extends React.Component {
    render () {
        const cities = Api.getHome();
        console.log("cmp/core/Home :")
        return (
            <div>
                Hello Home {cities} 
            </div>
        );
    }

}

export default Home;