/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "beige": "#F5F5DC",
                "blu": "#0d1e21",
                "white": "#f9f8f4"
            }
        },
    },
    plugins: [],
};
