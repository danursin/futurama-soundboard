import AppContextProvider from "../components/AppContextProvider";
import Head from "next/head";
import ModeToggle from "../components/ModeToggle";
import Navbar from "../components/Navbar";
import type { NextPage } from "next";
import SoundGrid from "../components/SoundGrid";

const Home: NextPage = () => {
    return (
        <AppContextProvider>
            <Head>
                <title>Futurama Soundboard</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="128x128" href="img/planet_express.png" />
                <link href="http://fonts.cdnfonts.com/css/futurama" rel="stylesheet" />
            </Head>

            <Navbar />
            <ModeToggle />
            <SoundGrid />
        </AppContextProvider>
    );
};

export default Home;
