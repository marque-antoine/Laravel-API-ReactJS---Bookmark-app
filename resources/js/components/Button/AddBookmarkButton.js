import React, { useState } from "react";
import {
    Box,
    Layer,
    FormField,
    TextInput,
    Form,
    Text,
    RangeInput,
    Select,
    MaskedInput,
    Button
} from "grommet";
import { MailOption, AddCircle } from "grommet-icons";

import { emailMask } from "../Utils/emailMask.js";

export default function UpdateBookmark(props) {
    const [value, setValue] = useState({});
    const [rangeValue, setRangeValue] = useState();
    const [selectValue, setSelectValue] = useState();
    const [emailValue, setEmailValue] = useState();
    const [openLayer, setOpenLayer] = useState(false);

    function sendBookmark() {
        var bookmark = value;
        bookmark.flames = rangeValue;
        bookmark.folder = selectValue;
        bookmark.shared = emailValue;
        //Use of axios, he manages the auth token for us
        axios
            .post("api/bookmarks/", bookmark)
            .then(function(response) {
                console.log(response);
                window.location.reload(false);
            })
            .then(function(error) {
                console.log(error);
            });
    }
    return (
        <>
            <Button
                icon={<AddCircle color="#228BE5" />}
                label="Add"
                onClick={() => setOpenLayer(!openLayer)}
            />
            {openLayer && (
                <Layer
                    onClickOutside={() => setOpenLayer(!openLayer)}
                    animation="fadeIn"
                >
                    <Box pad="medium">
                        <Form
                            value={value}
                            onChange={nextValue => setValue(nextValue)}
                            onReset={() => setValue({})}
                            onSubmit={() => {
                                sendBookmark();
                            }}
                        >
                            <FormField name="title" label="Title*">
                                <TextInput name="title" />
                            </FormField>
                            <FormField name="url" label="Url*">
                                <TextInput name="url" />
                            </FormField>
                            <FormField name="folder" label="Folder">
                                <TextInput name="folder" />
                            </FormField>
                            <Text>Flames</Text>
                            <RangeInput
                                value={rangeValue}
                                min={0}
                                max={5}
                                step={1}
                                onChange={event => {
                                    setRangeValue(event.target.value);
                                }}
                            />
                            <Box gap="small" margin={{ bootom: "10px" }}>
                                <Text>Tags</Text>
                                <Select
                                    options={[
                                        "React",
                                        "Laravel",
                                        "Swift",
                                        "Other"
                                    ]}
                                    value={selectValue}
                                    onChange={({ option }) =>
                                        setSelectValue(option)
                                    }
                                />
                            </Box>
                            <FormField name="shared" label="Shared with">
                                <MaskedInput
                                    icon={<MailOption />}
                                    mask={emailMask}
                                    value={emailValue}
                                    onChange={event =>
                                        setEmailValue(event.target.value)
                                    }
                                />
                            </FormField>
                            <Box direction="row" gap="medium">
                                <Button type="submit" primary label="Update" />
                                <Button type="reset" label="Reset" />
                            </Box>
                        </Form>
                    </Box>
                </Layer>
            )}
        </>
    );
}
