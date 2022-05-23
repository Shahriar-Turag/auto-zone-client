module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#FFC801",
                    secondary: "#103178",
                    accent: "#37cdbe",
                    neutral: "black",
                    "base-100": "#ffffff",
                },
            },

            "cupcake",
        ],
    },
    plugins: [require("daisyui")],
};
