import React from 'react';
import Home from '../components/core/Home';
import Api from '../utils/Api';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from '../components/city/Gallery';

class HomeContainer extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = {
          cities: []
        }}

    componentDidMount(){
        console.log("src/containers/Homecontainer/componentDisMount #1 :", this.state)
        Api.getHome().then((res) => {

            this.setState({
                cities: res
            })
            
        });
    }
    
  render() {
        const {
            cities,
        } = this.state
        return (
            <div>
                <Gallery cities={cities}/>
            </div>
        );
    }
}

export default HomeContainer;