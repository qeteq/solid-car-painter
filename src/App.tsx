import type { Component } from "solid-js";
import { CarPainter } from "./CarPainter";

export const App: Component = () => {
    return (
        <main class="min-h-full flex items-center justify-center">
            <CarPainter />
        </main>
    );
};
