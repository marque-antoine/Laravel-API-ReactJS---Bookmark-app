import React, { Component } from "react";
import { Box, InfiniteScroll } from "grommet";

import Bookmark from "../Bookmark/Bookmark";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: []
        };
    }

    //Get all bookmarks
    componentDidMount() {
        fetch("api/bookmarks")
            .then(response => {
                return response.json();
            })
            .then(bookmarks => {
                this.setState({ bookmarks });
            });
    }

    render() {
        return (
            <Box>
                <InfiniteScroll items={this.state.bookmarks}>
                    {bookmark => (
                        <Bookmark key={bookmark.id} bookmark={bookmark} />
                    )}
                </InfiniteScroll>
                Success
            </Box>
        );
    }
}
