import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

export interface ValueData {
    id: number;
    name: string;
    content: string;
}

const getValue = async (): Promise<ValueData> => {
    const res = await apiClient.get<{ data: ValueData }>(
        "/api/static_pages/value"
    );
    return res.data.data;
};

export const useValue = () => {
    return useQuery({
        queryKey: ["value"],
        queryFn: getValue,
        staleTime: 0,
        retry: 3,
        refetchOnWindowFocus: false,
    });
};