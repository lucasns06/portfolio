import { useEffect, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";

const { useContext } = require("react");
const { createContext } = require("react");

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const savedTheme = localStorage.getItem("isDarkTheme") === "true";

    const [isDarkTheme, setIsDarkTheme] = useState(savedTheme);

    useEffect(() => {
        localStorage.setItem("isDarkTheme", isDarkTheme);
        const body = document.body;
        if (isDarkTheme) {
            body.classList.add("dark-theme");
        } else {
            body.classList.remove("dark-theme");
        }
    }, [isDarkTheme]);


    gsap.registerPlugin(MotionPathPlugin);
    useEffect(() => {
        const paths = document.querySelectorAll(".imgTheme .path");
        gsap.fromTo(
            paths,
            {
                opacity: 0.5,
            },
            {
                // scale: 0.6,
                opacity: 1,
                yoyo: true,
                repeat: -1,
                stagger: 0.8,
                duration: 1,
                ease: "none",
            }
        );

        const sun = document.querySelector('#sun')
        gsap.to(sun,
            {
                rotate: 360,
                yoyo: true,
                repeat: -1,
                duration: 2,
            })
    }, [isDarkTheme]);
    return (
        <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => useContext(ThemeContext);
