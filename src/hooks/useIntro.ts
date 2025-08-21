import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

export interface IntroData {
    id: number;
    name: string;
    content: string;
}

const getIntro = async (): Promise<IntroData> => {
    const res = await apiClient.get<{ data: IntroData }>(
        "/api/static_pages/intro"
    );
    return res.data.data;
};

export const useIntro = () => {
    return useQuery({
        queryKey: ["intro"],
        queryFn: getIntro,
        staleTime: 0,
        retry: 3,
        refetchOnWindowFocus: false,
    });
};