import { characters, playSound } from "../services/soundService";

import { Character } from "../types";
import { Grid } from "semantic-ui-react";
import React from "react";
import SoundButton from "./SoundButton";

const customPlayFunctions: {
    [key in Character]?: (count: number) => Promise<void>;
} = {
    farnsworth: (count: number) => {
        if (count % 2 === 0) {
            return playSound("farnsworth.mp3");
        } else {
            return playSound("farnsworth_pointless.mp3");
        }
    },
    morbo: (count: number) => {
        switch (count % 4) {
            case 0:
                return playSound("morbo_doom.mp3");
            case 1:
                return playSound("morbo_belligerent.mp3");
            case 2:
                return playSound("morbo_destroy_her.mp3");
            case 3:
                return playSound("morbo_windmills.mp3");
            default:
                throw new Error("Morbo case statement didn't hit a case");
        }
    }
};

const SoundGrid: React.FC = () => {
    return (
        <Grid columns="3" stretched centered padded="horizontally">
            {characters.map((character) => (
                <Grid.Column key={character}>
                    <SoundButton character={character} onPlay={customPlayFunctions[character]} />
                </Grid.Column>
            ))}
        </Grid>
    );
};

export default SoundGrid;
