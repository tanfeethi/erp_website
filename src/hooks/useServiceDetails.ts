import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

export interface ServiceDetailImage {
    id: number;
    service_detail_id: number;
    image_path: string;
    created_at: string;
    updated_at: string;
}

export interface Service {
    id: number;
    title: { ar: string; en: string };
    text: { ar: string; en: string };
    icon: string;
    type: string;
    created_at: string;
    updated_at: string;
}

export interface ServiceDetail {
    id: number;
    service_id: number;
    title: { ar: string; en: string };
    description: { ar: string; en: string };
    created_at: string;
    updated_at: string;
    images: ServiceDetailImage[];
    service: Service;
}

export const getServiceDetails = async (): Promise<ServiceDetail[]> => {
    const response = await apiClient.get(
        "/api/frontend/service-details"
    );
    return response.data;
};


const useServiceDetails = () => {
    return useQuery<ServiceDetail[]>({
        queryKey: ["service-details"],
        queryFn: getServiceDetails,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
        refetchOnMount: true,
    });
};

export default useServiceDetails;