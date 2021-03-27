import React from 'react';
import { useStore } from 'react-context-hook';

import { Box, Grid, GridItem } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"

import SettingsIcon from '../assets/icons/settings.svg';
import InfoIcon from '../assets/icons/info.svg';
import HamburgerIcon from '../assets/icons/hamburger.svg';
import AddIcon from '../assets/icons/add.svg';
import DownloadIcon from '../assets/icons/download.svg';
import MaximizeIcon from '../assets/icons/maximize.svg';

import { isMobile } from '../utils/Utils';


const Toolbar = (props) => {
    const [theme] = useStore('theme');
    const [selectedDestination, setSelectedDestination] = useStore('selectedDestination');
    const [resetMap, setResetMap] = useStore('resetMap');

    const callResetMap = () => {
        setSelectedDestination(null);
        setResetMap(true);
    }

    const getMenuItems = () => {
        const floatDirection = isMobile ? "float-top" : "float-right";

        const commonMenu = [
            <Image title="Settings" key="settings" className={floatDirection} alt="" ml={4} mb={4} src={SettingsIcon} h="20px" onClick={() => props.showSettingsModal(true)} />,
            <Image title="About" key="about" className={floatDirection} alt="" ml={4} mb={4} src={InfoIcon} h="20px" onClick={() => props.showAboutModal(true)} />,
            <Image title="Show Full Map" key="reset-map" className={floatDirection} alt="" ml={4} mb={4} src={MaximizeIcon} h="20px" onClick={() => callResetMap()} />
        ]

        const desktopMenu = [
            ...commonMenu,
            <Image title="Download Map" key="download" className={floatDirection} alt="" ml={4} mb={4} src={DownloadIcon} h="20px" onClick={() => props.showDownloadModal(true)} />
        ]

        const mobileMenu = [
            <Image title="Menu" key="menu" alt="" className={floatDirection} ml={4} mb={4} src={HamburgerIcon} h="20px" onClick={() => props.drawerOpen(true)} />,
            <Image title="Add Destination" key="add" alt="" className={floatDirection} ml={4} mb={4} src={AddIcon} h="20px" onClick={() => props.showAddModal(true)} />,
            ...commonMenu,
        ]

        return <Box className="fit-height float-right" mt={6} mr={4}>
            {isMobile ? mobileMenu : desktopMenu}
        </Box>
    }

    return (
        <div>
            <Grid
                className={props.className}
                w="100%"
                templateColumns="repeat(12, 1fr)"
                gap={0}>
                <GridItem colSpan={6}>
                    <Image src={theme.logo} alt="" h="40px" margin="16px" />
                </GridItem>
                <GridItem colSpan={6}>
                    {getMenuItems()}
                </GridItem>
            </Grid>
        </div>
    )
};

export default Toolbar;