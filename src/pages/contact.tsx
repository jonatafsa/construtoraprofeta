import { Menu } from "../components/menu";
import Head from "next/head";
import { Footer } from "../components/footer";
import { Contact } from "../components/contact";

export default function PageContact() {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Sobre a Empresa - Construtora Profeta</title>
            </Head>
            <Menu />
            <Contact />
            <Footer />
        </>
    )
}