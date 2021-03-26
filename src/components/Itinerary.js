import React, { useState } from 'react';
import { useStore } from 'react-context-hook';

import { Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import DownloadIcon from '../assets/icons/download.svg';
import AddIcon from '../assets/icons/add.svg';
import AeroplaneGray from '../assets/icons/aeroplane-gray.svg';

import AddDestinationModal from './modals/AddDestination';

import { getItinerary } from '../utils/StorageManager';

const Itinerary = (props) => {
    const [theme] = useStore('theme');
    const [itinerary, setItinerary] = useStore('itinerary');
    const [selectedDestination, setSelectedDestination] = useStore('selectedDestination');
    const [showAddModal, setShowAddModal] = useState(false);

    const closeAddModal = (refreshItinerary) => {
        setShowAddModal(false);
        if (refreshItinerary) {
            setItinerary(getItinerary());
        }
    }

    const renderItinerary = () => {
        return itinerary.map(item => {
            const selected = selectedDestination?.icao === item.icao;
            return <Col xs={12}
                key={item.icao}
                className={"pt-2 pb-2 m-0 " + (selected ? theme.gradient : '')}
                onClick={() => { setSelectedDestination(item) }}>
                <p className={"medium-text p-0 m-0 " + (selected ? 'text-white' : '')}><b>{item.city.toUpperCase()}</b></p>
                <p className={"small-text p-0 m-0 " + (selected ? 'text-light' : '')}>{item.country.toUpperCase()}</p>
            </Col>
        })
    }

    return (
        <div className="fit-container flex-container">
            <AddDestinationModal show={showAddModal} handleClose={closeAddModal} />

            <Navbar bg="transparent" variant="light" className="p-3 m-0">
                <Navbar.Brand>
                    <div>
                        <p className="headline p-0 m-0">ITINERARY</p>
                        <p className="small-text p-0 m-0">{itinerary.length} DESTINATIONS</p>
                    </div>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link><img src={DownloadIcon} width="20px" alt="" /></Nav.Link>
                    <Nav.Link onClick={() => setShowAddModal(true)}><img alt="" src={AddIcon} width="20px" /></Nav.Link>
                </Nav>
            </Navbar>
            <hr className="p-0 m-0" />
            <Row className="fit-width fill-remaining-height vertical-scroll pt-2 pb-2 m-0">
                {
                    itinerary.length > 0
                        ? <div className="fit-width">
                            {renderItinerary()}
                        </div>
                        : <div className="text-center p-5">
                            <img src={AeroplaneGray} width="30%" alt="" />
                            <p className="p-0 m-0 mt-4 small-text all-caps">Add some destinations to begin. Your destinations are stored locally and will be deleted if browser data is cleared.</p>
                        </div>
                }
            </Row>
        </div>
    )
};

export default Itinerary;