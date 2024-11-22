export const fetcher = async (endpoint: string, method: string, token?: string, body?: object, params?: object) => {
    if (params) {
        const paramsString = generateParamString(params || {});
        endpoint = endpoint + paramsString;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    });


    if (!res.ok) {
        throw new Error("An error occurred while fetching the data.");
    }

    return res.json();
}

const generateParamString = (params: object) => {
    let string = ''
    for (const [key, value] of Object.entries(params)) {
        if (!key || !value) {
            return '';
        }

        string += `${key}=${value}&`;
    }

    return '?' + string;
}