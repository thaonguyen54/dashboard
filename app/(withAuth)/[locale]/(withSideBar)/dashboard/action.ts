'use server'
import { fetcher } from "@/app/utils/config";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { Project } from "./type";

export async function fetchProjects(page: number, pageSize: number) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("at")?.value;

    const params = {
        "pagination[page]": `${page}`,
        "pagination[pageSize]": `${pageSize}`,
        "populate": "license_uses"
    }

    const res = await fetcher(`/projects`, "GET", accessToken, undefined, params);
    const projects = res.json();

    return projects;
}

export async function deleteProject(project: Project) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("at")?.value;

    try {
        await fetcher(`/projects/${project.documentId}`, "DELETE", accessToken);
        revalidatePath("/dashboard");
        return { message: "Project deleted successfully", code: 200 };
    } catch (e) {
        console.log(e);
        return { message: "An error occurred while deleting the project", code: 400 };
    }
}


export async function editProject(project: Project) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("at")?.value;
    const projectBody = {
        data: {
            name: project.name,
            domain: project.domain,
            lastAssessed: project.lastAssessed,
        }
    }

    try {
        await fetcher(`/projects/${project.documentId}`, "PUT", accessToken, projectBody);
        revalidatePath("/dashboard");
        return { message: "Project updated successfully", code: 200 };
    } catch (e) {
        console.log(e);
        return { message: "An error occurred while updating the project", code: 400 };
    }
}



