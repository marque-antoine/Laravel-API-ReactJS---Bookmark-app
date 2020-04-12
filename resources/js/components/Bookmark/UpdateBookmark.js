import React, { useState } from "react";
import {
    Box,
    Collapsible,
    FormField,
    TextInput,
    Form,
    Text,
    RangeInput,
    Select,
    MaskedInput
} from "grommet";
import { MailOption } from "grommet-icons";

import { emailMask } from "../Utils/emailMask.js";

export default function UpdateBookmark() {
    const [value, setValue] = useState({});
    const [rangeValue, setRangeValue] = useState();
    const [selectValue, setSelectValue] = useState();
    const [emailValue, setEmailValue] = useState();
    return (
        <Collapsible open={true}>
            <Box pad="medium">
                <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onReset={() => setValue({})}
                    onSubmit={() => {}}
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
                            options={["React", "Laravel", "Swift", "Other"]}
                            value={selectValue}
                            onChange={({ option }) => setSelectValue(option)}
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
        </Collapsible>
    );
}
