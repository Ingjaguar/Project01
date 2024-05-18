import React from 'react';
//import styles from "./Sidebar.module.css";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 justify-center rounded-lg">
            <section className="bg-neutral">
                <p className="shadow text-center text-neutral-950 text-xl w-full py-2 bg-slate-50">
                    Introduction
                </p>
                <ul className="menu w-full">
                    <Link href="#" className="self-center btn btn-neutral ">
                        <p className="my-2">
                            Quick Start
                        </p>
                    </Link>
                    <Link href="#" className="self-center">
                        <p className="btn btn-neutral my-2">
                            Installation
                        </p>
                    </Link>
                    <Link href="#" className="self-center">
                        <button className="btn btn-neutral my-2">
                            Describing the UI
                        </button>
                    </Link>
                </ul>
            </section>
            <section className="bg-white text-black col-span-2 border border-black">
                <h1 className="shadow-2xl text-3xl mx-auto text-center">
                    Main
                </h1>
            </section>
            <section className="bg-white text-black border border-black">
                <h1 className="shadow text-center text-gray-700 text-xl my-2">
                    Navegation
                </h1>
            </section>
        </div>
    );
}