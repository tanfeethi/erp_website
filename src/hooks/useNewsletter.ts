import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import apiClient from "../utils/apiClient";

interface UseNewsletterRequest {
    email: string;
}

interface UseNewsletterResponse {
    data: { message: string }[];
    status: string;
    error: string;
    code: number;
}

interface ErrorResponse {
    message?: string;
}

const useNewsletter = () => {
    return useMutation<UseNewsletterResponse, AxiosError<ErrorResponse>, UseNewsletterRequest>({
        mutationFn: async (formData: UseNewsletterRequest) => {
            const response = await apiClient.post<UseNewsletterResponse>("/api/frontend/newsletter/subscrip", formData);
            console.log(response.data);
            return response.data;
        },
        onError: (error) => {
            console.error("Error sending contact form:", error.response?.data?.message || error.message);
        },
    });
};

export default useNewsletter;