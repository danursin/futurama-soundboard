import { Header, Icon, Menu } from "semantic-ui-react";
import React, { useState } from "react";

import HelpModal from "./HelpModal";

const Navbar: React.FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (
        <Menu tabular>
            <Menu.Menu position="left">
                <Menu.Item>
                    <Header
                        content="Futurama Soundboard"
                        color="grey"
                        size="huge"
                        image="/img/planet_express.png"
                        className="text-futurama"
                    />
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Icon link name="help circle" color="grey" size="huge" onClick={() => setModalOpen(true)} />
                    <HelpModal open={modalOpen} onClose={() => setModalOpen(false)} />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default Navbar;
