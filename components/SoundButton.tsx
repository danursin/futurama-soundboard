import { Button, Image, SemanticCOLORS } from "semantic-ui-react";
import React, { useContext, useEffect, useState } from "react";
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
    const [clickStart, setClickStart] = useState<number>();
    const { selectedCharacter, setSelectedCharacter } = useContext(AppContext);

    useEffect(() => {
        if (!clickStart) {
            return;
        }
        const timeout = setTimeout(() => {
            setSelectedCharacter(character);
        }, 500);
        return () => {
            clearTimeout(timeout);
        };
    }, [character, clickStart, selectedCharacter, setSelectedCharacter]);

    const onMouseDown = () => {
        console.log("Mouse down");
        setClickStart(+new Date());
        setSelectedCharacter(undefined);
    };
    const onMouseUp = async () => {
        if (!clickStart) {
            return;
        }

        setClickStart(undefined);

        const now = +new Date();
        const duration = now - clickStart;
        if (duration < 500) {
            setDisabled(true);
            await playSound(soundMap[character]);
            setDisabled(false);
            setSelectedCharacter(undefined);
        } else {
            setSelectedCharacter(character);
        }
    };

    const isBasic = (): boolean => {
        if (!selectedCharacter) {
            return true;
        }
        return false;
    };

    const getColor = (): SemanticCOLORS | undefined => {
        if (!selectedCharacter) {
            return undefined;
        }

        if (selectedCharacter === character) {
            return sourceColor;
        }

        return targetColor;
    };

    const getOpacity = (): number => {
        if (!selectedCharacter) {
            return 1;
        }

        if (selectedCharacter !== character) {
            return 1;
        }

        return 0.5;
    };

    return (
        <Button
            type="button"
            disabled={disabled}
            fluid
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            // onClick={handleClick}
            style={{ padding: 0, margin: 0, opacity: getOpacity() }}
            basic={isBasic()}
            color={getColor()}
        >
            <Image src={`/img/${imgMap[character]}`} alt={imgMap[character]} centered />
        </Button>
    );
};

export default SoundButton;
