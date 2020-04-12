export const emailMask = [
    {
        regexp: /^[\w\-_.]+$/,
        placeholder: "exemple"
    },
    { fixed: "@" },
    {
        regexp: /^[\w]+$/,
        placeholder: "domain"
    },
    { fixed: "." },
    {
        regexp: /^[\w]+$/,
        placeholder: "com"
    }
];
