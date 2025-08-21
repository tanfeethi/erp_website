import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

export interface MultilingualField {
  ar: string;
  en: string;
}

export interface AboutData {
  id: number;
  name: string;
  content: string;
}

const getAbout = async (): Promise<AboutData> => {
  const res = await apiClient.get<{ data: AboutData }>(
    "/api/static_pages/about"
  );
  return res.data.data;
};

export const useAbout = () => {
  return useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
    staleTime: 0,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
