import React from "react";
import { Box } from "grommet";

import AddBookmarkButton from "../Buttons/AddBookmarkButton";
import CategoriesButton from "../Buttons/CategoriesButton";

export default function Buttons(props) {
    return (
        <Box alignContent="between">
            <Box direction="row">
                <CategoriesButton updateBookmarks={props.updateBookmarks} />
                <AddBookmarkButton />
            </Box>
        </Box>
    );
}
