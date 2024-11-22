'use server'

import { cookies } from "next/headers";

export async function fetchProjects(page: number, pageSize: number) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("at")?.value;
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=license_uses`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    const projects = await res.json();
    return projects;
}