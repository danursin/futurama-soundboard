import { Header, Menu } from "semantic-ui-react";

import React from "react";

const Navbar: React.FC = () => {
    return (
        <Menu tabular>
            <Menu.Menu position="left">
                <Menu.Item>
                    <Header content="Futurama" color="grey" image="/img/planet_express.png" className="text-futurama" />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default Navbar;
