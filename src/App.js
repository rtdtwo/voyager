import { useEffect, useState } from 'react';
import { withStore } from 'react-context-hook';

import { Row, Col } from 'react-bootstrap';
import './App.css';
import Itinerary from './components/Itinerary';
import Map from './components/Map';
import Toolbar from './components/Toolbar';

import { getItinerary, getTheme, getHome } from './utils/StorageManager';
import { getThemeById } from './theme/Theme';
import GetStartedModal from './components/modals/GetStarted';

const App = () => {

  const [showGetStarted, setShowGetStarted] = useState(getHome() === null || getHome() === undefined);

  const handleGetStartedClose = () => {
    setShowGetStarted(false)
  }

  return (
    <div className="App">
      <GetStartedModal show={showGetStarted} handleClose={handleGetStartedClose} />
      <Row className="m-0 p-0 fit-viewport-width fit-viewport-height">
        <Col className="m-0 p-0 fit-viewport-height" xs={12} md={8} xl={9}>
          <div className="fit-viewport-height relative-container">
            <Map className="fit-container absolute-top z-base" />
            <Toolbar className="fit-width absolute-top z-top fade-top" />
            <p className="p-3 m-0 small-text all-caps absolute-bottom z-top"><small>Paths do not depict actual flight routes.</small></p>
          </div>
        </Col>
        <Col className="m-0 p-0 fit-viewport-height" xs={12} md={4} xl={3}>
          <Itinerary className="fit-container" />
        </Col>
      </Row>
    </div>
  );
}

const globalState = { theme: getThemeById(getTheme()), itinerary: getItinerary(), home: getHome()};
export default withStore(App, globalState);