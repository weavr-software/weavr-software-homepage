module.exports = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                pan: "pan 60s linear infinite",
            },
            keyframes: {
                pan: {
                    "0%": { backgroundPosition: "0% 0%" },
                    "100%": { backgroundPosition: "100% 100%" },
                },
            },
        },
    },
    plugins: [],
};
