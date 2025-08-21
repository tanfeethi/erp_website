import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

interface Events {
    id: number;
    image: string;
}

interface EventsResponse {
    data: Events[];
    status: string;
    error?: string;
    code: number;
}

const useEvents = () => {
    const { i18n } = useTranslation();

    return useQuery<EventsResponse, AxiosError>({
        queryKey: ["events", i18n.language],
        queryFn: async () => {
            const response = await apiClient.get("/api/frontend/events");
            return response.data;
        },
        staleTime: 1000 * 60 * 5,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
    });
};

export default useEvents;