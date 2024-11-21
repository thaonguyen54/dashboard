export type License = {
    role: string;
}

export type Project = {
    documentId: string;
    name: string;
    domain: string;
    licenseStatus: string;
    lastAssessed: string;
    imageUrl: string;
    license_uses: License[];
}
