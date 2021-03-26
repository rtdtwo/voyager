import React from 'react';
import { useStore } from 'react-context-hook';

import { Grid, GridItem } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"

import SettingsIcon from '../assets/icons/settings.svg';
import HamburgerIcon from '../assets/icons/hamburger.svg';
import AddIcon from '../assets/icons/add.svg';

import { isMobile } from '../utils/Utils';


const Toolbar = (props) => {
    const [theme] = useStore('theme');

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
                    {isMobile ? <Image alt="" src={HamburgerIcon} ml="auto" h="20px" mt="26px" mb="26px" mr="16px" onClick={() => props.drawerOpen(true)} /> : null}
                    {isMobile ? <Image alt="" src={AddIcon} ml="auto" h="20px" mt="26px" mb="26px" mr="16px" onClick={() => props.showAddModal(true)} /> : null}
                    <Image alt="" src={SettingsIcon} ml="auto" h="20px" mt="26px" mb="26px" mr="16px" onClick={() => props.showSettingsModal(true)} />
                </GridItem>
            </Grid>
        </div>
    )
};

export default Toolbar;