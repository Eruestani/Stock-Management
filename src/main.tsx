// React imports
import React from "react";
import ReactDOM from "react-dom/client";

// Chakra UI imports
import { ChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Font imports
import "@fontsource/alata";

// Component imports
import App from "./App"; // Chakra UI imports

// The initial color mode is light and the system color mode is disabled
const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

// Extend the theme with custom colors, fonts, and components
const theme = extendTheme({
    config,
    colors: {
        brand: {
            100: "#050123", // Text: Light Mode
            150: "#e0dcfe", // Text: Dark Mode
            200: "#e3e2fe", // Background: Light Mode Shade 1
            210: "#bfbbfc", // Background: Light Mode Shade 2
            220: "#9a94fa", // Background: Light Mode Shade 3
            250: "#073955", // Background: Dark Mode Shade 1
            260: "#04202f", // Background: Dark Mode Shade 2
            270: "#010609", // Background: Dark Mode Shade 3
            300: "#1a057f", // Primary: Light Mode
            350: "#9480fa", // Primary: Dark Mode
            400: "#f859dd", // Secondary: Light Mode
            450: "#a6078c", // Secondary: Dark Mode
            500: "#f50a68", // Accent: Light Mode
            550: "#f50a68", // Accent: Dark Mode
        },
        brandButton: {
            200: "#00c2c2", // Dark Mode
            300: "#00adad", // Dark Mode Hover
            400: "#009999", // Dark Mode Active
            500: "#005c5c", // Light Mode
            600: "#004747", // Light Mode Hover
            700: "#003333", // Light Mode Active
        },
    },
    fonts: {
        heading: "'Alata', sans-serif",
        body: "'Alata', sans-serif",
    },
});

// Render the app to the root element
// The entry point of the app is the router provider
// This is then wrapped in the Chakra UI provider
// React.StrictMode is used to catch potential issues in the app
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
