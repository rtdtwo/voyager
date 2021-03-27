import React from 'react';
import { useStore } from 'react-context-hook';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Button,
    Box,
} from "@chakra-ui/react"

const DownloadModal = (props) => {
    const [theme] = useStore('theme');

    return (
        <Modal isOpen={props.show} onClose={() => props.handleClose()}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader className="subhead-text all-caps">Download</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p className="regular-text">This will download the map as a JPEG image as it is currently appearing on the screen. Are you sure you wish to download the map as it is displayed currently?</p>
                    <Button mt={6} mb={6} w="100%" className={theme.button} onClick={() => props.print()}>Yes, Download</Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
};

export default DownloadModal;