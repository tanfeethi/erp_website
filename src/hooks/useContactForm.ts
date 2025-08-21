import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import apiClient from "../utils/apiClient";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    massage: string;
    subject?: string;
}

interface ErrorResponse {
    message?: string;
}

const useContactForm = (options?: {
    onSuccess?: () => void;
    onError?: () => void;
}) => {
    return useMutation<ContactFormData, AxiosError<ErrorResponse>, ContactFormData>({
        mutationFn: async (formData: ContactFormData) => {
            const payload = {
                ...formData,
                subject: "Contact Us",
            };
            const response = await apiClient.post("/api/contactUs/sendMail", payload);
            return response.data;
        },
        onSuccess: () => {
            toast.success("تم إرسال الرسالة بنجاح");
            options?.onSuccess?.();
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "فشل إرسال الرسالة");
            options?.onError?.();
        },
    });
};

export default useContactForm;