import { Character } from "../types";

export const playSound = (filename: string): Promise<void> => {
    return new Promise<void>((resolve) => {
        const src = `/sounds/${filename}`;
        const audio = new Audio(src);
        audio.addEventListener("ended", () => resolve());
        audio.play();
    });
};

export const characters: Character[] = ["amy", "bender", "farnsworth", "fry", "kif", "leela", "morbo", "zapp", "zoidberg", "random"];

export const dialogs: [Character, Character][] = [
    ["amy", "bender"],
    ["amy", "leela"],
    ["bender", "fry"]
];
