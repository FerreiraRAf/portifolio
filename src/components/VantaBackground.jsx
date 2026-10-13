import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VantaBackground({ children }) {
    const ref = useRef(null);

    useEffect(() => {
        let effect;
        let cancelled = false;

        async function iniciar() {
            // O Vanta procura o THREE global
            window.THREE = THREE;
            await import("vanta/dist/vanta.dots.min");

            if (cancelled || !ref.current) return;

            effect = window.VANTA.DOTS({
                el: ref.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x1dea53,
                color2: 0x15e02c,
                backgroundColor: 0x1f1f1f,
                size: 4.60,
                spacing: 29.00
            });
        }

        iniciar();

        return () => {
            cancelled = true;
            if (effect) effect.destroy();
        };
    }, []);

    return (
        <section
        style={{
            position: "relative",
            minHeight: "72vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            <div
                ref={ref}
                aria-hidden="true"
                style={{ position: "absolute", inset: 0, zIndex: 0 }}
            />
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "1rem",
                    padding: "3rem 2rem",
                    background:"radial-gradient(ellipse at center, rgba(31,31,31,0.65) 0%, rgba(31,31,31,0) 70%)",
                }}
            >
            {children}
        </div>
    </section>
    );
}