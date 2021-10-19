// Note: Ideally this does *not* live in the codebase
// and is injected through an environment variable.
// Its currently living in the codebase due this being a code exercise
export const apiKey = "24be637f-e596-4847-b47a-1791feeea1bd";

export const apiUrl = `https://api.thecatapi.com/v1/images/search`;
export const tableHeaders = ["id", "breeds", "url"];
export const order = 'DESC';
export const limit = 10;