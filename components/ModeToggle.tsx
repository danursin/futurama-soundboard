import { Form, Grid } from "semantic-ui-react";
import React, { useContext } from "react";

import { AppContext } from "./AppContextProvider";

const ModeToggle: React.FC = () => {
    const { mode, setMode } = useContext(AppContext);
    return (
        <Grid columns="1" textAlign="center" padded="horizontally">
            <Grid.Column>
                <Form>
                    <Form.Group>
                        <Form.Radio
                            inline
                            name="mode"
                            label="Single Character Mode"
                            checked={mode === "single"}
                            onClick={() => setMode("single")}
                        />
                        <Form.Radio inline name="mode" label="Dialog Mode" checked={mode === "dialog"} onClick={() => setMode("dialog")} />
                    </Form.Group>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default ModeToggle;
