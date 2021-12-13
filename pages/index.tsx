import { Grid, Header } from "semantic-ui-react";
import SoundButton, { SoundButtonProps } from "../components/SoundButton";

import Head from "next/head";
import type { NextPage } from "next";

const sounds: Omit<SoundButtonProps, "triggerHappyMode">[] = [
    {
        imgSrc: "good-news-everyone.jpg",
        soundSrc: "good-news-everyone.mp3"
    },
    {
        imgSrc: "shut-up-baby-i-know-it.jpg",
        soundSrc: "shut-up-baby-i-know-it.mp3"
    }
];

const Home: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Futurama Soundboard</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="128x128" href="img/triforce.png"></link>
            </Head>

            {/* <Image src="/img/hypnotoad.gif" alt="Zelda Logo" layout="fill" className="w-100 px-3 py-2" /> */}
            <Header content="Futurama Soundboard" image="/img/hypnotoad.gif" block color="grey" size="huge" />

            <Grid columns="3" stretched centered textAlign="center">
                {sounds.map((sound) => (
                    <Grid.Column key={sound.imgSrc}>
                        <SoundButton {...sound} triggerHappyMode={true} />
                    </Grid.Column>
                ))}
            </Grid>
        </div>
    );
};

export default Home;
