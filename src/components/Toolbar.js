import React from 'react';
import { useStore } from 'react-context-hook';

import { Box, Grid, GridItem } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"

import SettingsIcon from '../assets/icons/settings.svg';
import InfoIcon from '../assets/icons/info.svg';
import HamburgerIcon from '../assets/icons/hamburger.svg';
import AddIcon from '../assets/icons/add.svg';

import { isMobile } from '../utils/Utils';


const Toolbar = (props) => {
    const [theme] = useStore('theme');

    const getMenuItems = () => {
        const floatDirection = isMobile ? "float-top" : "float-right";

        const menu = [
            <Image key="settings" className={floatDirection} alt="" ml={4} mb={4} src={SettingsIcon} h="20px" onClick={() => props.showSettingsModal(true)} />,
            <Image key="about" className={floatDirection} alt="" ml={4} mb={4} src={InfoIcon} h="20px" onClick={() => props.showAboutModal(true)} />
        ]

        const mobileMenu = [
            <Image key="menu" alt="" className={floatDirection} ml={4} mb={4} src={HamburgerIcon} h="20px" onClick={() => props.drawerOpen(true)} />,
            <Image key="add" alt="" className={floatDirection} ml={4} mb={4} src={AddIcon} h="20px" onClick={() => props.showAddModal(true)} />,
            ...menu,
        ]

        return <Box className="fit-height float-right" mt={6} mr={4}>
            {isMobile ? mobileMenu : menu}
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