import React, { useState } from 'react';
import { useStore } from 'react-context-hook';
import { setHome as setHomeStorage } from '../../utils/StorageManager.js';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    Input,
    Image,
    VStack,
    StackDivider,
    Box,
    Button
} from "@chakra-ui/react"

import Destinations from '../../data/airport_db.json';

const GetStartedModal = (props) => {
    const [theme] = useStore('theme');
    const [home, setHome] = useStore('home');
    const [selectedHome, setSelectedHome] = useState(null);
    const [searchOptions, setSearchOptions] = useState([]);

    const handleSubmit = () => {
        if (selectedHome !== null) {
            setHome(selectedHome);
            setHomeStorage(selectedHome);
            props.handleClose();
        }
    }

    const handleOptionSelect = (item) => {
        setSelectedHome(item);
        setSearchOptions([])
    }

    const onSearchChange = (event) => {
        setSelectedHome(null);
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
        <Modal isOpen={props.show} onClose={() => ''}>
            <ModalOverlay />
            <ModalContent className="text-align-center" p={8}>
                <Image src={theme.logo} width="180px" alt="" className="center-using-margin" />
                <p className="medium-text">WELCOME TRAVELER! LET'S GET STARTED.</p>
                <br />
                <p className="regular-text">WHERE'S HOME?</p>
                <Input
                    key={selectedHome?.icao}
                    defaultValue={selectedHome ? (selectedHome.city + ', ' + selectedHome.country) : ''}
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
                            className="vertical-scroll search-options">

                            {searchOptions.map(item => {
                                return <Box mt={2} mb={2} onClick={() => handleOptionSelect(item)}>
                                    <p className="regular-text all-caps"><b>{item.city}</b></p>
                                    <p className="small-text all-caps">{item.country}</p>
                                </Box>
                            })}

                        </VStack> : null
                }

                <Button className={theme.button} mt={8} onClick={() => handleSubmit()}>Begin</Button>

            </ModalContent>
        </Modal >
    )
}

export default GetStartedModal;