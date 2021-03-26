import React, { useState } from 'react';
import { useStore } from 'react-context-hook';
import { addToItinerary, getItinerary } from '../../utils/StorageManager.js';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Input,
    VStack,
    StackDivider,
    Box,
    Button
} from "@chakra-ui/react"

import Destinations from '../../data/airport_db.json';

const AddDestinationModal = (props) => {
    const [theme] = useStore('theme');
    const [itinerary, setItinerary] = useStore('itinerary');
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [searchOptions, setSearchOptions] = useState([]);

    const handleSubmit = () => {
        if (selectedPlace !== null) {
            addToItinerary(selectedPlace);
            setItinerary(getItinerary());
            setSearchOptions([]);
            setSelectedPlace(null);
            props.handleClose();
        }
    }

    const handleOptionSelect = (item) => {
        setSelectedPlace(item);
        setSearchOptions([])
    }

    const onSearchChange = (event) => {
        setSelectedPlace(null);
        const searchTerm = event.target.value.toLowerCase();
        if (searchTerm.length >= 3) {
            setSearchOptions(Destinations.filter(item => {
                return item.city.toLowerCase().includes(searchTerm) || item.country.toLowerCase().includes(searchTerm)
            }))
        } else {
            setSearchOptions([]);
        }
    }

    return (
        <Modal isOpen={props.show} onClose={() => props.handleClose()}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader className="subhead-text all-caps">Add a Destination</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input
                        key={selectedPlace?.icao}
                        defaultValue={selectedPlace ? (selectedPlace.city + ', ' + selectedPlace.country) : ''}
                        placeholder="Type a city"
                        type="text"
                        className="text-align-center"
                        mt={3}
                        onChange={onSearchChange.bind(this)} />
                    {
                        searchOptions.length > 0 ?
                            <VStack
                                divider={<StackDivider borderColor="gray.200" />}
                                spacing={0}
                                align="stretch"
                                className="vertical-scroll search-options text-align-center">

                                {searchOptions.map(item => {
                                    return <Box mt={2} mb={2} onClick={() => handleOptionSelect(item)}>
                                        <p className="regular-text all-caps"><b>{item.city}</b></p>
                                        <p className="small-text all-caps">{item.country}</p>
                                    </Box>
                                })}

                            </VStack> : null
                    }
                </ModalBody>
                <Button className={theme.button} onClick={() => handleSubmit()} m={5}>Submit</Button>
            </ModalContent>
        </Modal>
    )
}

export default AddDestinationModal;