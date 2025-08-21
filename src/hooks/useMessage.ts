import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

export interface MessageData {
    id: number;
    name: string;
    content: string;
}

const getMessage = async (): Promise<MessageData> => {
    const res = await apiClient.get<{ data: MessageData }>(
        "/api/static_pages/message"
    );
    return res.data.data;
};

export const useMessage = () => {
    return useQuery({
        queryKey: ["message"],
        queryFn: getMessage,
        staleTime: 0,
        retry: 3,
        refetchOnWindowFocus: false,
    });
};