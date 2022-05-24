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
                    accent: "#F6DA52",
                    neutral: "#F6F2E7",

                    "base-100": "#ffffff",
                },
            },

            "cupcake",
        ],
    },
    plugins: [require("daisyui")],
};
