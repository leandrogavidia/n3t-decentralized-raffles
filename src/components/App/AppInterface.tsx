import { FC } from "react";
import { Header } from "@components/Header/Header";
import { Main } from "@components/Main/Main";
import { Footer } from "@components/Footer/Footer";

const AppInterface: FC = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export { AppInterface }