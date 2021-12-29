import { Button, Image, List, Popup } from "semantic-ui-react";
import React, { useContext, useState } from "react";
import { dialogs, playSound } from "../services/soundService";

import { AppContext } from "./AppContextProvider";
import { Character } from "../types";

export interface SoundButtonProps {
    character: Character;
    onPlay?: (count: number) => Promise<void>;
}
const SoundButton: React.FC<SoundButtonProps> = ({ character, onPlay }) => {
    const [count, setCount] = useState<number>(0);
    const [dialogOptionsOpen, setDialogOptionsOpen] = useState<boolean>(false);

    const { mode } = useContext(AppContext);

    const handleClick = async () => {
        if (mode === "single") {
            setCount((currentCount) => currentCount + 1);
            if (onPlay) {
                await onPlay(count);
            } else {
                await playSound(`${character}.mp3`);
            }
        } else {
            setDialogOptionsOpen(true);
        }
    };

    const availableCharacterDialogs = dialogs
        .filter((d) => d.includes(character))
        .flat()
        .filter((c) => c !== character);

    return (
        <Popup
            trigger={
                <Button
                    as="div"
                    type="button"
                    fluid
                    onClick={handleClick}
                    style={{ padding: 0, margin: 0 }}
                    basic
                    disabled={mode === "dialog" && !availableCharacterDialogs.length}
                >
                    <Image src={`/img/${character}.png`} alt={`/img/${character}.png`} centered verticalAlign="middle" />
                </Button>
            }
            disabled={!dialogOptionsOpen}
            onClose={() => setDialogOptionsOpen(false)}
        >
            <Popup.Header content="Dialog Options" />
            <Popup.Content>
                <List selection divided>
                    {availableCharacterDialogs.map((otherCharacter) => {
                        const soundName = [character, otherCharacter].sort().join("_");
                        return (
                            <List.Item
                                key={otherCharacter}
                                image={<Image src={`/img/${otherCharacter}.png`} size="tiny" alt={`${otherCharacter}.mp3`} />}
                                content={otherCharacter}
                                onClick={async () => {
                                    await playSound(`${soundName}.mp3`);
                                }}
                            />
                        );
                    })}
                </List>
            </Popup.Content>
        </Popup>
    );
};

export default SoundButton;
