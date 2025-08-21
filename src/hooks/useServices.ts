import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

export interface Services {
    id: string;
    title: string;
    text: string;
    icon: string;
    type?: string;
}

export const getServices = async () => {
    const res = await apiClient.get<{ data: Services[] }>(
        "/api/frontend/services"
    );
    console.log("services =>", res.data);
    return res.data.data;
};

export const useFetchServices = () => {
    const { i18n } = useTranslation();
    return useQuery({
        queryKey: ["services", i18n.language],
        queryFn: getServices,
        staleTime: 0,
        retry: 3,
        refetchOnWindowFocus: false,
    });
};
