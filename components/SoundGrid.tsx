import { characters, imgMap, soundMap } from "../services/soundService";

import { Grid } from "semantic-ui-react";
import React from "react";
import SoundButton from "./SoundButton";

const SoundGrid: React.FC = () => {
    return (
        <Grid columns="3" stretched centered padded="horizontally">
            {characters.map((character) => (
                <Grid.Column key={character}>
                    <SoundButton character={character} />
                </Grid.Column>
            ))}
        </Grid>
    );
};

export default SoundGrid;
