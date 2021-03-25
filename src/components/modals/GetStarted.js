import React, { useState } from 'react';
import { useStore } from 'react-context-hook';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import { setHome as setHomeStorage } from '../../utils/StorageManager.js';

import Destinations from '../../data/airport_db.json';

const GetStartedModal = (props) => {
    const [theme] = useStore('theme');
    const [home, setHome] = useStore('home');

    const [selectedHome, setSelectedHome] = useState([]);

    const filterDestinations = (option, props) => (
        option.city.toLowerCase().indexOf(props.text.toLowerCase()) !== -1 ||
        option.country.toLowerCase().indexOf(props.text.toLowerCase()) !== -1
    );

    const handleSubmit = () => {
        if (selectedHome.length > 0) {
            setHome(selectedHome[0])
            setHomeStorage(selectedHome[0]);
            props.handleClose();    
        }
    }

    return (
        <Modal centered backdrop="static" show={props.show} onHide={() => props.handleClose()}>
            <Modal.Body className="text-center m-4">
                <img src={theme.logo} width="180px" alt="" />
                <p className="p-0 m-0 medium-text">WELCOME TRAVELER! LET'S GET STARTED.</p>
                <Form.Group>
                    <Form.Label className="regular-text mt-5 mb-3">WHERE'S HOME?</Form.Label>
                    <Typeahead
                        filterBy={filterDestinations}
                        labelKey="city"
                        onChange={setSelectedHome}
                        id="set-home"
                        className="mb-3"
                        options={Destinations}
                        placeholder="Type a city"
                        renderMenuItemChildren={(option) => (
                            <div>
                                <p className="p-0 m-0 medium-text"><b>{option.city.toUpperCase()}</b></p>
                                <p className="p-0 m-0 small-text">{option.country.toUpperCase()}</p>
                            </div>
                        )}
                    />
                    <Form.Text className="text-muted all-caps mb-5"><small>You can always change this later.<br/>If your location is not on the list, select the nearest city.</small></Form.Text>
                </Form.Group>

                <Button className={theme.button} variant="primary" onClick={() => handleSubmit()}>
                        Begin</Button>
            </Modal.Body>
        </Modal>
    )
}

export default GetStartedModal;