import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

export interface VisionData {
    id: number;
    name: string;
    content: string;
}

const getVision = async (): Promise<VisionData> => {
    const res = await apiClient.get<{ data: VisionData }>(
        "/api/static_pages/vision"
    );
    return res.data.data;
};

export const useVision = () => {
    return useQuery({
        queryKey: ["vision"],
        queryFn: getVision,
        staleTime: 0,
        retry: 3,
        refetchOnWindowFocus: false,
    });
};