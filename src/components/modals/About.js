import React from 'react';
import { useStore } from 'react-context-hook';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Image,
    ModalBody,
    Box,
    Table,
    Tbody,
    Td,
    Tr,
    Thead,
    Th
} from "@chakra-ui/react"

import AddIcon from '../../assets/icons/add.svg';
import HamburgerIcon from '../../assets/icons/hamburger.svg';
import MaximizeIcon from '../../assets/icons/maximize.svg';
import DownloadIcon from '../../assets/icons/download.svg';
import SettingsIcon from '../../assets/icons/settings.svg';

const AboutModal = (props) => {
    const [theme] = useStore('theme');

    return (
        <Modal isOpen={props.show} onClose={() => props.handleClose()}>
            <ModalOverlay />
            <ModalContent h="80vh">
                <ModalHeader className="subhead-text all-caps">About</ModalHeader>
                <ModalCloseButton />
                <ModalBody className="vertical-scroll">
                    <Image src={theme.logo} w="180px" alt="" mb={4} className="center-using-margin" />
                    <p className="regular-text text-align-center">Made with <span title="All you need is love! - The Beatles">❤️</span> by <a href="https://rishabh.blog" target="_blank" rel="noreferrer"><b><u>Rishabh Tatiraju</u></b></a></p>
                    <Box mt={6} mb={6}>
                        <p className="regular-text text-align-justify">Voyager is a travel itinerary visualizer. Simply set your home city and start adding destinations to see them on a beautifully crafted map - a way to remember all your travels!</p>
                    </Box>
                    <p className="regular-text text-align-center all-caps"><b>Usage Guide</b></p>
                    <Box mb={6}>
                        <Table size="sm" variant="unstyled">
                            <Thead>
                                <Tr>
                                    <Th className="text-color-transparent">Button</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Image src={AddIcon} w="16px" alt="" />
                                    </Td>
                                    <Td>
                                        <p className="regular-text">Add a destination to your itinerary</p>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={HamburgerIcon} w="16px" />
                                    </Td>
                                    <Td>
                                        <p className="regular-text">(Mobile Only) Open the itinerary</p>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={MaximizeIcon} w="16px" />
                                    </Td>
                                    <Td>
                                        <p className="regular-text">Reset the map view to the way it was initially. This does not clear your itinerary, only resets the zoom and map position.</p>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={DownloadIcon} w="16px" />
                                    </Td>
                                    <Td>
                                        <p className="regular-text">Download the map as an image.</p>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={SettingsIcon} w="16px" />
                                    </Td>
                                    <Td>
                                        <p className="regular-text">Open the app's settings.</p>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                    <p className="regular-text text-align-center all-caps"><b>Credits</b></p>
                    <Box mt={2} mb={6}>
                        <p className="small-text text-align-justify"><i><b>Anushka Ramteke</b></i>, for the endless travel talks and our collective love to travel that inspired me to make this! She's also the person to credit for the color schemes used here.
<br /><br /><i><b>Akash Joshi</b></i>, for inardavently introducing me to React. His React articles have been a lot of help too!
<br /><br /><i><b>Varun Joshi</b></i>, who said <i>"Hey, why don't you try Chakra UI?"</i> on a call. Varun is also a close friend and a well wisher!
<br /><br /><i><b>My beloved late father</b></i>, for gifting me an atlas when I was 6 years old, something that led me to develop an obsession towards geography and cartography.</p>
                    </Box>
                    <p className="regular-text text-align-center all-caps"><b>Support this tool</b></p>
                    <Box mt={2} mb={6}>
                        <p className="small-text text-align-justify">Voyager is a free and open-source web app. I do not intend to make any money out of it as it was built with pure passion and for self happiness, but any generosity in the form of monetary donations is welcome. To support me and this project, you can PayPal your donations to user <i>tatiraju.rishabh@gmail.com</i>.</p>
                    </Box>
                    <p className="regular-text text-align-center all-caps"><b>Homage</b></p>
                    <Box mt={2}>
                        <p className="small-text text-align-justify">Although this tool is in no way related to space exploration, it is named after <i>Voyager 1</i>, the cosmic traveler.</p>
                    </Box>
                    <Image alt="" mt={4} mb={4} className="center-using-margin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Voyager_spacecraft_model.png/320px-Voyager_spacecraft_model.png" width="300px" />
                    <Box mb={4}>
                        <p className="small-text text-align-justify">Voyager 1 is the farthest man-made object from Earth. The spacecraft, now more than 22 billion km (14 billion miles) away from us, is slated to wander the vast darkness of space for eternity.
                        <br /><br />By 2025, its radioisotope thermoelectric generators (RTGs, a type of nuclear power generator) will no longer supply enough electric power for onboard instruments, and it will disappear from our sight forever. However, it carries a gold-plated audio-visual disc, should the spacecraft ever be found by intelligent life forms from other planetary systems.
                        <br /><br />Quite indeed, it is boldly going where no one has ever gone before!🖖</p>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
};

export default AboutModal;