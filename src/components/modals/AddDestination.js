import React, { useState } from 'react';
import { useStore } from 'react-context-hook';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import { addToItinerary } from '../../utils/StorageManager.js';

import Destinations from '../../data/airport_db.json';

const AddDestinationModal = (props) => {
    const [theme] = useStore('theme');

    const [selectedDestination, setSelectedDestination] = useState([]);

    const filterDestinations = (option, props) => (
        option.city.toLowerCase().indexOf(props.text.toLowerCase()) !== -1 ||
        option.country.toLowerCase().indexOf(props.text.toLowerCase()) !== -1
    );

    const handleSubmit = () => {
        if (selectedDestination.length > 0) {
            addToItinerary(selectedDestination[0]);
            props.handleClose(true);
        }
    }

    return (
        <Modal centered show={props.show} onHide={() => props.handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title className="headline">ADD A DESTINATION</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label className="regular-text"><b>WHERE?</b></Form.Label>
                    <Typeahead
                        filterBy={filterDestinations}
                        labelKey="city"
                        onChange={setSelectedDestination}
                        id="add-destination"
                        className="all-caps"
                        options={Destinations}
                        placeholder="Type a destination"
                        renderMenuItemChildren={(option) => (
                            <div>
                                <p className="p-0 m-0 medium-text"><b>{option.city.toUpperCase()}</b></p>
                                <p className="p-0 m-0 small-text">{option.country.toUpperCase()}</p>
                            </div>
                        )}
                    />
                    <Form.Text className="text-muted">Search from {Destinations.length} destinations!</Form.Text>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button className={theme.button} variant="primary" onClick={() => handleSubmit()}>
                    Add
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddDestinationModal;