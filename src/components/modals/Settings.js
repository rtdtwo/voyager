import React from 'react';
import { useStore } from 'react-context-hook';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

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
        <Modal centered show={props.show} onHide={() => props.handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title className="headline">SETTINGS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={12} md={6}>
                        <p className="p-0 m-0 medium-text"><b>THEME</b></p>
                        <p className="p-0 m-0 small-text">Currently set to {theme.label}</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group>
                            <Form.Control
                                as="select"
                                className="regular-text"
                                onChange={handleThemeChange.bind(this)}
                                defaultValue={theme.id}>
                                {getThemeOptions()}
                            </Form.Control>
                        </Form.Group>

                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
};

export default SettingsModal;