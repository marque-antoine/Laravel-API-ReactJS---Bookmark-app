import React from "react";
import { Box, Text, Anchor, Button } from "grommet";

export default function Bookmark(props) {
    return (
        <Box fill>
            <Box direction="row-responsive" border fill>
                <Box basis="3/4">
                    <Text>{props.bookmark.title}</Text>
                    <Anchor href={props.bookmark.url}>
                        {props.bookmark.url}
                    </Anchor>
                    <Text>Categorie : {props.bookmark.folder}</Text>
                    <Text>Tags : {props.bookmark.tags}</Text>
                    <Text>Shared with : {props.bookmark.shared}</Text>
                </Box>
                <Box basis="1/4">
                    <Button label="Delete" onClick={() => {}} />
                    <Button label="Modify" onClick={() => {}} />
                    <Text>Flames : {props.bookmark.flames}</Text>
                </Box>
            </Box>
        </Box>
    );
}
