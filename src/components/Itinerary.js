import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DownloadIcon from '../assets/icons/download.svg';
import AddIcon from '../assets/icons/add.svg';

const Itinerary = (props) => {
    return (

        <div className="fit-container">
            <Row className="fit-width p-0 m-0">
                <Col md="auto" className="p-4 m-0">
                    <p className="headline p-0 m-0">ITINERARY</p>
                    <p className="small-text p-0 m-0">211 PLACES</p>
                </Col>
                <Col className="text-right align-self-center p-4 m-0">
                    <img src={DownloadIcon} width="20px" height="20px" className="mr-4" />
                    <img src={AddIcon} width="20px" height="20px" />
                </Col>
            </Row>
            <hr className="p-0 m-0" />
            <Row className="fit-width p-0 m-0">
                
            </Row>
        </div>
    )
};

export default Itinerary;