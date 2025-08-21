import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
}

interface FaqsResponse {
  success: boolean;
  errorCode: number;
  status: number;
  notificationsCount: number;
  messages: string;
  data: FAQ[];
}

const useFaqs = () => {
  const { i18n } = useTranslation();

  return useQuery<FaqsResponse, AxiosError<{ error: string }>>({
    queryKey: ["faqs", i18n.language],
    queryFn: async () => {
      const response = await apiClient.get("/api/faqs");
      console.log(response);
      
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useFaqs;
