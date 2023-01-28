import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <main className="flex-1 flex">
            <div className="w-64 bg-indigo-50 border-r border-r-indigo-500 px-8 py-4">
                <nav>
                    <ul>
                        <li>
                            <a href={`/links/1`}>Dokument-1</a>
                        </li>
                        <li>
                            <a href={`/links/2`}>Zdjęcie z wakacji</a>
                        </li>
                        <li>
                            <a href={`/links/3`}>Film wodospadu</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>
        </main>
    )
}