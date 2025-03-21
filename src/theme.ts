import { createTheme, MantineThemeOverride } from "@mantine/core";

const darkTheme: MantineThemeOverride = createTheme({
    colorScheme: "dark",
    fontFamily: "Open Sans, sans-serif",
    colors: {
        dark: [
            "#0C0208", "#1F1F33", "#24243D", "#2E2E4C", "#3A3A5A",
            "#464668", "#515176", "#63638C", "#7575A2", "#8A8AB8",
        ],
        primary: [
            "#1E90FF", "#1C80E0", "#1A71C1", "#1861A2", "#165283",
            "#144264", "#123245", "#102226", "#0E1207", "#0C0208",
        ],
        text: [
            "#E0E0E0", "#BDBDBD", "#9E9E9E", "#7F7F7F", "#616161",
            "#424242", "#3D3D3D", "#333333", "#292929", "#1F1F1F",
        ],
    },
    primaryColor: "primary",
    white: "#E0E0E0",
    black: "#1A1A2E",

    // ✅ Apply global background color
    globalStyles: (theme) => ({
        "html, body, #root": {
            backgroundColor: theme.colors.dark[0], // Ensures dark background
            color: theme.colors.text[0], // Ensures text color is readable
            height: "100%",
            margin: 0,
            padding: 0,
        },
    }),

    // Add code highlighting theme customization
    components: {
        CodeHighlight: {
            styles: (theme) => ({
                root: {
                    backgroundColor: theme.colors.dark[1],
                    borderRadius: theme.radius.md,
                },
                pre: {
                    backgroundColor: "transparent !important",
                },
                code: {
                    color: theme.colors.text[0] + " !important",
                },
                // Configure specific token types
                tokens: {
                    comment: { color: "#7F7F7F" },
                    string: { color: "#50FA7B" },
                    keyword: { color: "#FF79C6" },
                    function: { color: "#8BE9FD" },
                    number: { color: "#FFB86C" },
                    variable: { color: "#F1FA8C" },
                    operator: { color: "#FF79C6" },
                    punctuation: { color: theme.colors.text[0] },
                },
            }),
        },
    },
});

export default darkTheme;