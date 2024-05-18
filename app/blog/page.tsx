import styles from "./page.module.css";
import Header from "@/app/components/Header/Header";
import React from "react";

//Modulo de la aplicacion
export default function Page() {
    return(
        <>
            <Header/>
            <p>Este es el Blog!</p>
        </>
    )
}