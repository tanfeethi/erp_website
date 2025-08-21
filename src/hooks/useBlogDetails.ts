import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
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

interface BlogResponse {
  status: string;
  data: BlogItem;
}

const useBlogDetails = (id: number) => {
  return useQuery<BlogResponse, AxiosError>({
    queryKey: ["blogDetails", id],
    queryFn: async () => {
      const response = await apiClient.get(`/api/news/${id}`);
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useBlogDetails;
