import { useState } from 'react';
import { withStore } from 'react-context-hook';

import './App.css';

import Itinerary from './components/Itinerary';
import Map from './components/Map';
import Toolbar from './components/Toolbar';
import GetStartedModal from './components/modals/GetStarted';

import { getItinerary, getTheme, getHome } from './utils/StorageManager';
import { isMobile } from './utils/Utils';
import { getThemeById } from './theme/Theme';

import { ChakraProvider, Drawer, Grid, GridItem, DrawerOverlay, Box, Button, Image } from "@chakra-ui/react"
import AddDestinationModal from './components/modals/AddDestination';
import SettingsModal from './components/modals/Settings';
import AboutModal from './components/modals/About';

import DomToImage from 'dom-to-image';
import DownloadModal from './components/modals/DownloadConfirmation';

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(getHome() === null || getHome() === undefined);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleGetStartedClose = () => {
    setShowGetStarted(false);
  }

  const handleDestinationAdded = () => {
    setShowAddModal(false);
  }

  const handleSettingsClose = () => {
    setShowSettingsModal(false);
  }

  const handleAboutClose = () => {
    setShowAboutModal(false);
  }

  const handleDownloadClose = () => {
    setShowDownloadModal(false);
  }

  const printMap = () => {
    setShowDownloadModal(false);
    DomToImage.toJpeg(document.getElementById('map'), { quality: 1, dpi: 300 })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'map.jpg';
        link.href = dataUrl;
        link.click();
      });
  }

  return (
    <ChakraProvider>
      <div className="App">
        {getHome() === null ? <GetStartedModal show={showGetStarted} handleClose={handleGetStartedClose} /> : null}

        <AddDestinationModal show={showAddModal} handleClose={handleDestinationAdded} />

        <SettingsModal show={showSettingsModal} handleClose={handleSettingsClose} />

        <AboutModal show={showAboutModal} handleClose={handleAboutClose} />

        <DownloadModal show={showDownloadModal} handleClose={handleDownloadClose} print={printMap} />

        <Grid
          h="100vh"
          w="100vw"
          templateColumns="repeat(12, 1fr)"
          gap={0}>
          <GridItem colSpan={{ base: 12, sm: 12, md: 8, lg: 9 }} h="100vh">
            <div className="fit-container relative-container">
              <div id="map" className="fit-container absolute-top z-base">
                <Map className="fit-container" />
              </div>
              <Toolbar
                className="fit-width absolute-top z-top fade-top"
                drawerOpen={setOpenDrawer}
                showAddModal={setShowAddModal}
                showAboutModal={setShowAboutModal}
                showDownloadModal={setShowDownloadModal}
                showSettingsModal={setShowSettingsModal} />
              <Box p={4} className="absolute-bottom z-top">
                <p className="small-text all-caps "><small>Paths do not depict actual flight routes.</small></p>
              </Box>
            </div>
          </GridItem>
          <GridItem colSpan={{ base: 0, sm: 0, md: 4, lg: 3 }} h="100vh">
            <Itinerary className="fit-container"
              showAddModal={setShowAddModal} />
          </GridItem>
        </Grid>
        {
          isMobile ?
            <Drawer
              isOpen={openDrawer}
              placement="right">
              <DrawerOverlay
                pl={20}>
                <Itinerary className="fit-container" drawer closeDrawer={setOpenDrawer} />
              </DrawerOverlay>
            </Drawer> : null
        }
      </div>
    </ChakraProvider>
  );
}

const globalState = {
  theme: getThemeById(getTheme()),
  itinerary: getItinerary(),
  home: getHome(),
  selectedDestination: null,
  resetMap: false
};

export default withStore(App, globalState);