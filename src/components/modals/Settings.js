import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AquaThemeIcon from '../../assets/icons/aqua-theme.svg';
import SunsetThemeIcon from '../../assets/icons/sunset-theme.svg';

const SettingsModal = (props) => {
    return (
        <Modal show={props.show} onHide={() => props.handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title className="headline">SETTINGS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={4}>
                        <p className="p-0 m-0 medium-text mb-3 ">THEME</p>
                    </Col>
                    <Col md={8} className="m-0 p-0 ">
                        <div className="float-left text-center ml-2 mr-2">
                            <img src={AquaThemeIcon} width="56px" />
                            <p className="mt-1 small-text"><small>MALDIVES</small></p>
                        </div>
                        <div className="float-left text-center ml-2 mr-2">
                            <img src={SunsetThemeIcon} width="56px" />
                            <p className="mt-1 small-text"><small>CALIFORNIA</small></p>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.handleClose()}>
                    Close
          </Button>
                <Button variant="primary" onClick={() => props.handleClose()}>
                    Save
          </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default SettingsModal;