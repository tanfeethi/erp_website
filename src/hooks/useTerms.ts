import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

export interface TermsConditions {
  id: number;
  name: string;
  content: string;
}

const getTerms = async (): Promise<TermsConditions> => {
  const res = await apiClient.get<{ data: TermsConditions }>(
    "api/static_pages/terms"
  );
  return res.data.data;
};

export const useTerms = () => {
  return useQuery({
    queryKey: ["termsConditions"],
    queryFn: getTerms,
    staleTime: 0,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
