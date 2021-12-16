import { Grid, Header, Image } from "semantic-ui-react";
import SoundButton, { SoundButtonProps } from "../components/SoundButton";

import Head from "next/head";
import type { NextPage } from "next";

const sounds: Omit<SoundButtonProps, "triggerHappyMode">[] = [
    {
        imgSrc: "amy.png",
        soundSrc: "amy.mp3"
    },
    {
        imgSrc: "bender.png",
        soundSrc: "bender_shutup.mp3"
    },
    {
        imgSrc: "farnsworth.png",
        soundSrc: "farnsworth.mp3"
    },
    {
        imgSrc: "fry.png",
        soundSrc: "fry.mp3"
    },
    {
        imgSrc: "kif.png",
        soundSrc: "kif_boobies.mp3"
    },
    {
        imgSrc: "leela.png",
        soundSrc: "leela.mp3"
    },
    {
        imgSrc: "morbo.png",
        soundSrc: "morbo_doom.mp3"
    },
    {
        imgSrc: "zapp.png",
        soundSrc: "zapp.mp3"
    },
    {
        imgSrc: "zoidberg.png",
        soundSrc: "zoidberg.mp3"
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

            <Header
                content="Futurama Soundboard"
                color="grey"
                block
                style={{ paddingTop: 5 }}
                size="huge"
                image="/img/planet_express.png"
                className="text-futurama"
            />

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
