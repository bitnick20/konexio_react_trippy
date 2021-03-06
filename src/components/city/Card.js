import React from 'react';
import Config from '../../Config';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    
`;

class Card extends React.Component {
    render () {
        // console.log("src/components/city/Card#render : ", this.props);
        const {
            name,
            source,
            slug,
        } = this.props
        return (
            <Container className='col-md-3 col-6'>
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

export default Card;