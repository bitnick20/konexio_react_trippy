// import React from 'react';



// class HomeContainer extends React.Component {
//     render () {
//         return (
//             <div>
//                 <p>Hello Home</p>
//             </div>
//         );
//     }
// }

// export default HomeContainer;

import React from 'react';
import Home from '../components/core/Home';
import Api from '../utils/Api';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomeContainer extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         cities: []
            
    //     }
    // }

    // componentDidMount () {
    //     console.log("test 1")
    //     Api.getHome();
    //     // .then(json => console.log(json)); // data from promise 
    //     // console.log("test 2")

    // }

    componentDidMount(){
        console.log("src/containers/Homecontainer/componentDisMount #1 :", this.state)
        const cities = Api.getHome();
        console.log("src/containers/Homecontainer/componentDisMount #2 :", this.state)
        this.setState({
            cities: Api.getHome.cities
        })
        console.log("Je test ce truc :", this);
    }
    
  render() {
    return (
        <div>
            <Home />
        </div>
    //   <div
    //     className='container-fluid'
    //     style={{
    //       fontFamily: 'Montserrat'
    //     }}>
    //     <div
    //       className='row'>
    //       <div
    //         className={'col-lg-4 col-md-8 col-12'}>
    //         <p>
    //           Je vérifie que les 2 mots : Voleur et <span style={{fontFamily: 'serif' }}>Voleur</span> ont une police d'écriture différente
    //         </p>
    //       </div>
    //       <div
    //         className='col-lg-8 col-md-4 col-12'>
    //         Une autre phrase
    //       </div>
    //     </div>
    //   </div>
    );
  }
}

export default HomeContainer;