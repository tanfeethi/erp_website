import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

export interface Projects {
  id: string;
  title: string;
  text: string;
  version: string;
  versions: { id: string; version: string }[];
  numberOfBeneficiaries: number;
  thumbnail: string[];
  report: string;
}

export const getProjects = async () => {
  const res = await apiClient.get<{ data: Projects[] }>(
    `/api/frontend/projects`
  );

  console.log("res =>", res.data);

  return res.data.data;
};

export const useFetchProjects = () => {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: ["projects", i18n.language],
    queryFn: () => getProjects(),
    staleTime: 0,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
