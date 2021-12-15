import { Grid, Header, Image } from "semantic-ui-react";
import SoundButton, { SoundButtonProps } from "../components/SoundButton";

import Head from "next/head";
import type { NextPage } from "next";

const sounds: Omit<SoundButtonProps, "triggerHappyMode">[] = [
    {
        imgSrc: "farnsworth.jpg",
        soundSrc: "farnsworth.mp3"
    },
    {
        imgSrc: "bender_shutup.jpg",
        soundSrc: "bender_shutup.mp3"
    },
    {
        imgSrc: "morbo_doom.gif",
        soundSrc: "morbo_doom.mp3"
    },
    {
        imgSrc: "mr_panucci.jpg",
        soundSrc: "mr_panucci.mp3"
    },
    {
        imgSrc: "morbo_windmills.jpg",
        soundSrc: "morbo_windmills.mp3"
    },
    {
        imgSrc: "morbo_destroy_her.jpg",
        soundSrc: "morbo_destroy_her.mp3"
    },
    {
        imgSrc: "kif_boobies.jpg",
        soundSrc: "kif_boobies.mp3"
    },
    {
        imgSrc: "morbo.png",
        soundSrc: "morbo_belligerent.mp3"
    },
    {
        imgSrc: "farnsworth.jpg",
        soundSrc: "farnsworth_pointless.mp3"
    }
];

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Futurama Soundboard</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="128x128" href="img/planet_express.png"></link>
            </Head>

            <Header content="Futurama Soundboard" color="grey" block size="huge" image="/img/planet_express.png" />

            <Grid columns="3" stretched centered padded="horizontally">
                {sounds.map((sound) => (
                    <Grid.Column key={sound.imgSrc}>
                        <SoundButton {...sound} triggerHappyMode={true} />
                    </Grid.Column>
                ))}
            </Grid>
        </>
    );
};

export default Home;
