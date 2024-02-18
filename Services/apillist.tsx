import { client } from "@/sanity/lib/client"

export const getAllMentors= async ()=>{
    const querry = `
    *[_type == "mentor"] {
        name,
        slug,
        profilePhoto,
        memberships,
        domain,
        batch,
        description,
        linkedin,
        "profilePhotoUrl" : profilePhoto.asset->url
    }`

    const mentorsList = await client.fetch(querry);
    return mentorsList
}

export const getAllMentorsByYear = async()=>{
    const querry = `
    *[_type == "years"] {
        year,
        mentors[]->{
            name,
            slug,
            profilePhoto,
            memberships,
            domain,
            batch,
            description,
            linkedin,
            "profilePhotoUrl" : profilePhoto.asset->url
        }
    }`

    const mentorsList = await client.fetch(querry);
    return mentorsList
}


export const getMentorByName = async (slug: string) => {
    const querry = `
    *[_type == "mentor" && slug.current == "${slug}"] {
        name,
        slug,
        profilePhoto,
        memberships,
        domain,
        batch,
        description,
        linkedin,
        "profilePhotoUrl" : profilePhoto.asset->url
    }`

    const mentor = await client.fetch(querry);
    return mentor

}

