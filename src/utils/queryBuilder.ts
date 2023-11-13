export interface QueryParameter {
    name: string,
    value: string | number
}

export function buildQueryString(endpoint: string, parameters: QueryParameter[]): string {
    const queryString = parameters
        .filter(argument => argument.value != null)
        .map(argument => `${encodeURIComponent(argument.name)}=${encodeURIComponent(argument.value)}`)
        .join('&');
    return `${endpoint}?${queryString}`;
}