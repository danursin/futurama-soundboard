import { Button, Image } from "semantic-ui-react";
import React, { useState } from "react";

import { playSound } from "../services/soundService";

export interface SoundButtonProps {
    imgSrc: string;
    soundSrc?: string;
    clickHandler?: (count: number) => Promise<void>;
    triggerHappyMode: boolean;
}
const SoundButton: React.FC<SoundButtonProps> = ({ imgSrc, soundSrc, clickHandler, triggerHappyMode }) => {
    const [count, setCount] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleClick = async () => {
        const newCount = count + 1;
        setCount(newCount);

        setDisabled(true);
        if (soundSrc) {
            await playSound(soundSrc);
        }
        if (clickHandler) {
            await clickHandler(newCount);
        }
        setDisabled(false);
    };

    return (
        <Button type="button" disabled={disabled && !triggerHappyMode} fluid onClick={handleClick} style={{ padding: 0, margin: 0 }} basic>
            <Image src={`/img/${imgSrc}`} alt={imgSrc} />
        </Button>
    );
};

export default SoundButton;
