import { File } from "sanity";

export interface Mentor {
    name: string,
    slug: {current: string},
    profilePhoto: File,
    designation: string,
    description: string,
    linkedin: string,
    profilePhotoUrl: string
}