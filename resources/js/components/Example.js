import React from "react";
import ReactDOM from "react-dom";
import { Box, Grommet } from "grommet";

import List from "../components/List/List";

function Example() {
    return (
        <Grommet plain>
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
