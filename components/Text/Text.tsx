import { Text as MantineText, TextProps as MantineTextProps } from "@mantine/core";
import React from "react";

// Define a custom Text component
const Text: React.FC<MantineTextProps> = (props) => {
    return (
        <MantineText
            color="text.0" // Set the default text color
            {...props} // Spread any additional props
        />
    );
};

export default Text;