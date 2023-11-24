import {Select} from "antd";
import React from "react";

export function LanguageSelector(props: {
    onSelect: (value: (((prevState: string) => string) | string)) => void,
    value: string
}) {
    return <>
        <p>
            language:&nbsp;
        </p>
        <Select
            defaultValue="en"
            onSelect={props.onSelect}
            value={props.value}
            options={[
                {value: "en", label: "🇬🇧"},
                {value: "no", label: "🇳🇴"},
                {value: "se", label: "🇸🇪"},
            ]}
        /></>;
}