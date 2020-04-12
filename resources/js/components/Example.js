import React from "react";
import ReactDOM from "react-dom";
import { Box, Grommet } from "grommet";

import List from "../components/List/List";

const theme = {
    anchor: { color: { dark: "white", light: "brand" } },
    global: {
        colors: { brand: "#228BE5", focus: "#0000b3", notif: "#0000b3" }
    }
};

function Example() {
    return (
        <Grommet plain theme={theme}>
            <Box margin={{ top: "60px" }}>
                <List />
            </Box>
        </Grommet>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
