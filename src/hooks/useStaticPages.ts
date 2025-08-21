import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

export interface StaticPages {
    name: string;
    title: string;
    text: string;
    image: string;
}

export const getStaticPages = async () => {
    const res = await apiClient.get<{ data: StaticPages[] }>(
        "/api/frontend/staticPages"
    );
    return res.data.data;
};

export const useFetchStaticPages = () => {
    const { i18n } = useTranslation()
    return useQuery({
        queryKey: ["staticPages", i18n.language],
        queryFn: getStaticPages,
        staleTime: 0,
        retry: 3,
        refetchOnWindowFocus: false,
    });
};