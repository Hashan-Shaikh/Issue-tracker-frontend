import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_ENDPOINT,
    headers: {
      'Content-Type': 'application/json',
    },
});

export async function post(_module: string, _data: any) {
    const response = await apiClient.post(_module, _data);
    return response.data;
}