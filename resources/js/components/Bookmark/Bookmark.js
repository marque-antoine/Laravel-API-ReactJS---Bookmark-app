import React, { useState } from "react";
import { Box, Text, Anchor, Button, CheckBox } from "grommet";
import { Refresh, MailOption, Trash } from "grommet-icons";

import UpdateBookmark from './UpdateBookmark'

export default function Bookmark(props) {
    const [checked, setChecked] = useState(false);
    const [openRefresh, setOpenRefresh] = useState(false);


    return (
        <Box fill>
            <Box
                direction="row-responsive"
                border
                fill
                gap="medium"
                pad="medium"
            >
                <Box basis="3/4">
                    <Text>{props.bookmark.title}</Text>
                    <Box direction="row">
                        <CheckBox
                            checked={checked}
                            label=""
                            onChange={event => setChecked(event.target.checked)}
                        />
                        <Anchor href={props.bookmark.url}>
                            {props.bookmark.url}
                        </Anchor>
                    </Box>

                    <Text>Categorie : {props.bookmark.folder}</Text>
                    <Text>Tags : {props.bookmark.tags}</Text>
                    <Text>Shared with : {props.bookmark.shared}</Text>
                </Box>
                <Box basis="1/4" align="center" gap="medium">
                    <Button
                        icon={<Trash color="#228BE5" />}
                        label="Delete"
                        onClick={() => {}}
                    />
                    <Button
                        icon={<Refresh color="#228BE5" />}
                        label="Modify"
                        onClick={() => setOpenRefresh(!openRefresh)}
                    />
                    <Box direction="row" align="center" gap="small">
                        <Text>{props.bookmark.flames}</Text>
                        <img
                            src="blueflame.png"
                            alt="number of flames for this bookmark"
                            width="20"
                            height="30"
                        />
                    </Box>
                </Box>
            </Box>
            {openRefresh && <UpdateBookmark id={props.bookmark.id}/>}
        </Box>
    );
}
