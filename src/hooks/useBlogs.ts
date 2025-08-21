import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

export interface BlogItem {
  id: number;
  title: string;
  description: string;
  image: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface BlogMetaLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface BlogsData {
  current_page: number;
  data: BlogItem[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: BlogMetaLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface BlogsResponse {
  status: string;
  data: BlogsData;
}

const useBlogs = (page: number) => {
  const { i18n } = useTranslation();

  return useQuery<BlogsResponse, AxiosError>({
    queryKey: ["blogs", i18n.language, page],
    queryFn: async () => {
      const response = await apiClient.get(`/api/news`);
      console.log(response);
      
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useBlogs;
