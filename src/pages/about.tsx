import { Menu } from "../components/menu";
import { About } from '../components/about'
import Head from "next/head";
import { Footer } from "../components/footer";

export default function PageAbout() {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Sobre a Empresa - Construtora Profeta</title>
            </Head>
            <Menu />
            <About />
            <Footer />
        </>
    )
}