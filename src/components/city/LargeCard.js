import React from 'react';
import Config from '../../Config';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
    
`;

class LargeCard extends React.Component {
    render () {
        // console.log("src/components/city/LargeCard#render : ", this.props);
        const {
            name,
            source,
            slug,
        } = this.props
        return (
            <Container className='col-md-6 col-12'>
                <Link to={'/hotels?city=' + slug}>
                    <div>
                        <img src={Config.host + source}/>
                        <p>{name}</p>
                    </div>
                </Link>
            </Container>
        );
    }
}

export default LargeCard;