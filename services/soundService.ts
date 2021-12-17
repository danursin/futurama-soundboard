import { Character } from "../types";

export const playSound = (filename: string): Promise<void> => {
    return new Promise<void>((resolve) => {
        const src = `/sounds/${filename}`;
        const audio = new Audio(src);
        audio.addEventListener("ended", () => resolve());
        audio.play();
    });
};

export const characters: Character[] = ["amy", "bender", "farnsworth", "fry", "kif", "leela", "morbo", "zapp", "zoidberg"];

export const imgMap: Record<Character, string> = {
    amy: "amy.png",
    bender: "bender.png",
    farnsworth: "farnsworth.png",
    fry: "fry.png",
    kif: "kif.png",
    leela: "leela.png",
    morbo: "morbo.png",
    zapp: "zapp.png",
    zoidberg: "zoidberg.png"
};

export const soundMap: Record<Character, string> = {
    amy: "amy.mp3",
    bender: "bender_shutup.mp3",
    farnsworth: "farnsworth.mp3",
    fry: "fry.mp3",
    kif: "kif_boobies.mp3",
    leela: "leela.mp3",
    morbo: "morbo_doom.mp3",
    zapp: "zapp.mp3",
    zoidberg: "zoidberg.mp3"
};
