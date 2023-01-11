import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "leadershipPage",
    title: "Leadership Page",
    type: "document",
    fields: [
        {
            name: "mainHeader",
            title: "Main Header",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "subHeader",
            title: "Sub Header",
            type: "text",
        },
    ],
}

export default schema
