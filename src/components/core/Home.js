import React from 'react';


class Home extends React.Component {
    render () {
        console.log("cmp/core/Home :")
        return (
            <di>
                Hello Home {this.props.cities}
            </di>
        );
    }

}

export default Home;