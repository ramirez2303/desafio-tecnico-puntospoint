import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import CardDropdown from "../components/ui/CardDropdown";
import GraphicsHeader from "../components/ui/GraphicsHeader";
import BiaxialChart from "../components/graphics/BiaxialChart";
import GroupedTable from "../components/ui/GroupedTable";
import { Fragment } from "react";

const Home: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Dashboard de Finanzas</title>
                <meta
                    name="description"
                    content="Dashboard financiero interactivo"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Navbar />
            </header>

            <main role="main">
                <section role="main" className="section-container">
                    <GraphicsHeader />
                    <BiaxialChart />
                    <GroupedTable />
                </section>

                <aside role="complementary" className="aside-container">
                    <CardDropdown />
                </aside>
            </main>
        </Fragment>
    );
};

export default Home;
