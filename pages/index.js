import Head from "next/head";
import LoginPage from "./LoginPage"

export default function Home() {

  return (
    <>
      <Head>
        <title>Trip2Day</title>
        <link rel="icon" href="/charizard.ico" />
        <link rel="preload" href="/fonts/Comfortaa-Light.ttf" />
        <link rel="preload" href="/fonts/Comfortaa-Medium.ttf" />
        <link rel="preload" href="/fonts/Comfortaa-Regular.ttf" />
        <link rel="preload" href="/fonts/Comfortaa-SemiBold.ttf" />
      </Head>

      <LoginPage />

    </>
  );
}
