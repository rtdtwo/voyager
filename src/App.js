import { Row, Col } from 'react-bootstrap';
import './App.css';
import Itinerary from './components/Itinerary';
import Map from './components/Map';
import Toolbar from './components/Toolbar';

const App = () => {
  return (
    <div className="App">
      <Row className="m-0 p-0 fit-container">
        <Col className="m-0 p-0" xs={12} md={8} xl={9}>
          <div className="fit-container relative-container">
            <Map className="fit-container absolute-top z-base" />
            <Toolbar className="fit-width absolute-top z-top fade-top" />
          </div>
        </Col>
        <Col className="m-0 p-0 fit-width" xs={12} md={4} xl={3}>
          <Itinerary className="fit-container" />
        </Col>
      </Row>
    </div>
  );
}

export default App;
