import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

interface Phones {
    phones: string[];
    mobiles: string[];
}

interface SocialMedia {
    linkedin?: string;
    facebook?: string;
    x?: string;
    tiktok?: string;
    instagram?: string;
}

interface statistics {
    trips?: number;
    hours?: number;
    programs?: number;
    clients?: number;
}

interface SettingsData {
    id: number;
    title: string;
    address: string;
    phones: Phones;
    social_media: SocialMedia;
    statistics: statistics;
    long: string;
    lat: string;
    email: string;
}

const fetchSettings = async (): Promise<SettingsData> => {
    const response = await apiClient.get("/api/frontend/settings/list");
    return response.data.data;
};

export const useSettings = () => {
    const { i18n } = useTranslation();
    return useQuery<SettingsData, Error>({
        queryKey: ["settings", i18n.language],
        queryFn: fetchSettings,
    });
};