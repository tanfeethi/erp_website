import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import apiClient from "../utils/apiClient";

export interface Clients {
    id: number;
    logo: string;
    link: string;
}

interface ClientsResponse {
    data: Clients[];
    status: string;
    error?: string;
    code: number;
}

const useClients = () => {
    return useQuery<ClientsResponse, AxiosError>({
        queryKey: ["clients"],
        queryFn: async () => {
            const response = await apiClient.get("/api/frontend/clients");
            return response.data;
        },
    });
};

export default useClients;