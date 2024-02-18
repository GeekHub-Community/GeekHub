
import { Rule } from 'sanity';

export const year = {
    name: 'years',
    title: "Years",
    type: 'document',
    fields : [
        {
            name: "year",
            title: "year",
            type: "string"
        },
        {
            name: "mentors",
            title: "Mentors",
            type: "array",
            of:[{type:"reference", to:{type:"mentor"}}]
        }
    ]
}




export const mentor = {
    name: 'mentor',
    title: 'Mentor',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },

        {
            name: 'profilePhoto',
            title: 'Profile Photo',
            type: 'image',
            options: {
                hotspot: true,
                crop: true,
            }
        },

        {
            name: 'memberships',
            title: 'Memberships',
            type: 'array',
            of: [{
                name: "membership",
                title: "Memebership",
                type: "document",
                fields: [
                    {
                        name: "position",
                        title: "Position",
                        type: "string",
                        options: {
                            list: ["Team Lead", "Mentor", "Crew Member"]
                        }
                    },
                    {
                        name: "joinyear",
                        title: "Join Year",
                        type: "date",
                        options: {
                            dateFormat: "YYYY",
            
                        }
                    }
                ]

            }]

        },
        {
            name: "domain",
            title: "Domain",
            options: {
                list: ["Frontend", "Backend", "AI/ML", "Blockchain", "Cyber Security", "Data Structure & Algorithm",
                    "Designing", "App Development", "Game Development", "Devops"]
            },
            type: "string"
        },
        {
            name: "batch",
            title: "Batch",
            type: "string",
            description: "Ex. 2021-2025"
        },

        {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (Rule: Rule) => Rule.max(500).error('maximum limit exceeds')
        },

        {
            name: 'linkedin',
            title: 'Linkedin',
            type: 'string'
        }
    ]
}