import React from 'react';
import { useStore } from 'react-context-hook';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Select
} from "@chakra-ui/react"

import { setTheme as setThemeStorage } from '../../utils/StorageManager';
import Themes from '../../theme/Theme';

const SettingsModal = (props) => {
    const [theme, setTheme] = useStore('theme');

    const handleThemeChange = (event) => {
        const newTheme = Themes[event.target.value];
        setTheme(newTheme);
        setThemeStorage(newTheme);
    }

    const getThemeOptions = () => {
        return Object.keys(Themes).map(key => {
            const item = Themes[key];
            return <option key={item.id} value={item.id} className="regular-text">
                {item.label}
            </option>
        })
    }

    return (
        <Modal isOpen={props.show} onClose={() => props.handleClose()}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader className="subhead-text all-caps">Settings</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl id="theme" mb={4}>
                        <FormLabel className="regular-text all-caps"><b>Theme</b></FormLabel>
                        <Select
                            defaultValue={theme.id}
                            className="regular-text"
                            onChange={handleThemeChange.bind(this)}>
                            {getThemeOptions()}
                        </Select>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
};

export default SettingsModal;