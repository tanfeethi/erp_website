import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

interface Slider {
    id: number;
    background: string;
    title: string;
    text: string;
    btnTitle: string;
}

interface SliderResponse {
    data: Slider[];
    status: string;
    error?: string;
    code: number;
}

const useSliders = () => {
    const { i18n } = useTranslation();
    return useQuery<SliderResponse, AxiosError>({
        queryKey: ["sliders", i18n.language],
        queryFn: async () => {
            const response = await apiClient.get("/api/frontend/sliders");
            return response.data;
        },
        staleTime: 1000 * 60 * 5,
    });
};

export default useSliders;