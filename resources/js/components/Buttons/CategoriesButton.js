import React, { useState, useEffect } from "react";
import { Box, DropButton, Text } from "grommet";

export default function CategoriesButton(props) {
    const [categories, setCategories] = useState([""]);

    useEffect(() => {
        axios
            .get("api/bookmarks/categories", categories)
            .then(function(categories) {
                setCategories(categories.data);
            });
    }, []);

    return (
        <DropButton
            label="Categories"
            dropAlign={{ top: "bottom", right: "right" }}
            dropContent={
                <Box gap="small">
                    {categories.map(categorie => (
                        <Box key={Math.random()}>
                            <Text textAlign="center">{categorie.folder}</Text>
                        </Box>
                    ))}
                </Box>
            }
        />
    );
}
