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
        this.updateBookmarks = this.updateBookmarks.bind(this);
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

    updateBookmarks(type, value) {
        fetch("api/bookmarks/" + type + "/" + value)
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
            <Box overflow="auto" align="center">
                <Buttons updateBookmarks={this.updateBookmarks} />
                <InfiniteScroll items={this.state.bookmarks}>
                    {bookmark => (
                        <Bookmark key={bookmark.id} bookmark={bookmark} />
                    )}
                </InfiniteScroll>
            </Box>
        );
    }
}
