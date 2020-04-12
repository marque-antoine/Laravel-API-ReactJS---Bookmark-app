import React, { Component } from "react";
import { Box, InfiniteScroll } from "grommet";

import Bookmark from "../Bookmark/Bookmark";
import Buttons from "./Buttons";

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
        //InfiniteScroll manage Lazy loading
        return (
            <Box>
                <Buttons />
                <InfiniteScroll items={this.state.bookmarks}>
                    {bookmark => (
                        <Bookmark key={bookmark.id} bookmark={bookmark} />
                    )}
                </InfiniteScroll>
            </Box>
        );
    }
}
