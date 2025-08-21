import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

export interface ProjectDetails {
    id: number;
    title: string;
    text: string;
    numberOfBeneficiaries: number;
    version: string;
    tags: any;
    thumbnail: any[];
    versions: { id: string; version: string }[];
    managers: any[];
    trainers: any[];
    type: string;
    report: string | null;
}

export const getProjectDetails = async (id: string | number) => {
    const res = await apiClient.get<{ data: ProjectDetails }>(`/api/frontend/projects/${id}`);
    return res.data.data;
};

export const useProjectDetails = (id: string | number) => {
    const { i18n } = useTranslation();

    return useQuery({
        queryKey: ["project", id, i18n.language],
        queryFn: () => getProjectDetails(id),
        enabled: !!id,
        retry: 2,
        refetchOnWindowFocus: false,
    });
};