import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

interface Teams {
    id: number;
    name: string;
    position: string;
    text: string;
    details: string;
    cv: string;
    image: string;
}

interface TeamsResponse {
    data: Teams[];
    status: string;
    error?: string;
    code: number;
}

const useTeams = () => {
    const { i18n } = useTranslation();
    return useQuery<TeamsResponse, AxiosError>({
        queryKey: ["teams", i18n.language],
        queryFn: async () => {
            const response = await apiClient.get("/api/frontend/teams");
            console.log("debbug teams =>", response.data);
            return response.data;
        },
        staleTime: 1000 * 60 * 5,
    });
};

export default useTeams;