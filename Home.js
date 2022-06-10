import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

function RenderCard({ isLoading }) {

    if (isLoading) {
        return <Loading />;
    }

    return (
        <FadeTransform 
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <Card>
                <CardBody>
                    <CardTitle>Explore</CardTitle>
                    <CardText>*App features, categories and shortcuts here*</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard 
                        
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;