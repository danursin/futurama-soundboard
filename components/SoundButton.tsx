import { Button, Image, SemanticCOLORS } from "semantic-ui-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { characters, imgMap, playSound, soundMap } from "../services/soundService";

import { AppContext } from "./AppContextProvider";
import { Character } from "../types";

const sourceColor: SemanticCOLORS = "orange";
const targetColor: SemanticCOLORS = "violet";

export interface SoundButtonProps {
    character: Character;
}
const SoundButton: React.FC<SoundButtonProps> = ({ character }) => {
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleClick = async () => {
        setDisabled(true);
        await playSound(soundMap[character]);
        setDisabled(false);
    };
    return (
        <Button type="button" disabled={disabled} fluid onClick={handleClick} style={{ padding: 0, margin: 0 }} basic>
            <Image src={`/img/${imgMap[character]}`} alt={imgMap[character]} centered />
        </Button>
    );
};

export default SoundButton;
