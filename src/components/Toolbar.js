import React, { useState } from 'react';
import { useStore } from 'react-context-hook';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SettingsIcon from '../assets/icons/settings.svg';
import SettingsModal from './modals/Settings';

const Toolbar = (props) => {
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [theme] = useStore('theme');

    return (
        <div>
            <SettingsModal
                show={showSettingsModal}
                handleClose={() => setShowSettingsModal(false)} />

            <Navbar bg="transparent" variant="light" className="p-3 m-0 fade-top">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={theme.logo}
                        height="45"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => setShowSettingsModal(true)}><img alt="" src={SettingsIcon} width="20px" /></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
};

export default Toolbar;