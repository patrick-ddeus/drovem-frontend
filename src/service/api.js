import axios, { AxiosError } from "axios";

const methods = [
    "get",
    "post",
    "put"
];

const axiosInstance = axios.create({
    baseURL: "https://drovem-api-bnc9.onrender.com/",
    headers: { "Content-Type": "application/json" },
});

const queryStringBuilder = (query) =>
    Object.keys(query).length
        ? `?${Object.keys(query)
            .map((param) => `${param}=${query[param]}`)
            .join("&")}`
        : "";

const axiosMethods = {}

methods.forEach((method) => {
    axiosMethods[method] = async function (route, body, query = {}, fullResponse = false) {
        try {
            const url = `${route}${queryStringBuilder(query)}`;
            const response = await axiosInstance({ method, url, data: body });

            return fullResponse ? response : response.data;
        } catch (error) {
            console.error(error.message);
            throw new AxiosError(error);
        }

    };
});

export default axiosMethods;