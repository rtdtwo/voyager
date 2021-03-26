import React from 'react';
import { useStore } from 'react-context-hook';

import AddIcon from '../assets/icons/add.svg';
import CloseIcon from '../assets/icons/close.svg';
import AeroplaneGray from '../assets/icons/aeroplane-gray.svg';
import { Box, VStack, Grid, GridItem } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

const Itinerary = (props) => {
    const [theme] = useStore('theme');
    const [itinerary] = useStore('itinerary');
    const [selectedDestination, setSelectedDestination] = useStore('selectedDestination');

    const renderItinerary = () => {
        return itinerary.map(item => {
            const selected = selectedDestination?.icao === item.icao;
            return <Box
                key={item.icao}
                pt={2} pb={2} pl={4} pr={4}
                className={selected ? theme.gradient : ''}
                onClick={() => {
                    if (props.drawer) {
                        props.closeDrawer(false);
                    }
                    setSelectedDestination(item);
                }}>
                <p className={"medium-text all-caps " + (selected ? "text-color-white" : "")}><b>{item.city}</b></p>
                <p className={"small-text all-caps " + (selected ? "text-color-white" : "")}>{item.country}</p>
            </Box>
        })
    }

    return (
        <div className="bg-white fit-container flex-container">
            <Grid
                w="100%"
                templateColumns="repeat(12, 1fr)"
                gap={0}>
                <GridItem colSpan={10} p={4}>
                    <div>
                        <p className="headline">ITINERARY</p>
                        <p className="small-text">{itinerary.length} DESTINATIONS</p>
                    </div>
                </GridItem>
                <GridItem colSpan={2}>
                    {props.drawer
                        ? <Image alt="" src={CloseIcon} ml="auto" h="16px" mt="28px" mb="28px" mr="16px" onClick={() => props.closeDrawer(false)} />
                        : <Image alt="" src={AddIcon} ml="auto" h="20px" mt="26px" mb="26px" mr="16px" onClick={() => props.showAddModal(true)} />
                    }
                </GridItem>
            </Grid>
            <hr />
            <div className="fit-width fill-remaining-height vertical-scroll">
                {
                    itinerary.length > 0 ?
                        <VStack
                            spacing={0}
                            align="stretch">
                            {renderItinerary()}
                        </VStack>
                        : <div className="text-align-center">
                            <br />
                            <img src={AeroplaneGray} width="30%" alt="" className="center-using-margin" />
                            <p className="small-text all-caps">
                                <br />Add some destinations to begin. Your destinations are stored locally and will be deleted if browser data is cleared.</p>
                        </div>
                }
            </div >
        </div>
    )
};

export default Itinerary;