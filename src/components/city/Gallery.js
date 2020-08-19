import React from 'react';
import Config from '../../Config';
import styled from 'styled-components';
import LargeCard from './LargeCard';
import Card from './Card';


const Container = styled.div`
    margin-top: 10px;
    margin-bottom : 20px;
    color: Global.color.body;
    font-family: Global.font.primery;
`;

class Gallery extends React.Component {
    render () {
        // console.log("src/components/city/GAllery#render 1 :", this.props);
        const {
            cities
        } = this.props
        // console.log("src/components/city/GAllery#render 2 :", cities);
        return (
            <Container className={`row ${Container}`}>
                <div className='col-md-12'>
                    <h1>Explorez le monde</h1>
                        {cities.map((city) => {
                            if (city.length > 1) {
                                console.log("test :", cities)
                                return(
                                    <div>
                                        {/* <LargeCard
                                        /> */}
                                        <div>
                                            <Card 
                                                name={city.name}
                                                slug={city.slug} 
                                                source={city.source}
                                            />
                                        </div>
                                    </div>
                                );
                            }else{
                                return(
                                    <div>
                                        <LargeCard 
                                            name={city.name}
                                            slug={city.slug} 
                                            source={city.source}
                                        />
                                    </div>
                                );
                            }
                        })}
                </div>
            </Container>
        );
    }
}

export default Gallery;