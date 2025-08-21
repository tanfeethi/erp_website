import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import apiClient from "../utils/apiClient";
import toast from "react-hot-toast";

interface UseJoinForm {
  name: string;
  email: string;
  phone: string;
  cv: File;
}

interface ErrorResponse {
  message?: string;
}

const useJoinForm = () => {
  return useMutation<UseJoinForm, AxiosError<ErrorResponse>, UseJoinForm>({
    mutationFn: async (formData: UseJoinForm) => {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("cv", formData.cv);

      const response = await apiClient.post(
        "/api/joinUs/sendMail",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
    onSuccess: (data: any) => {
      console.log("success=>", data.data[0].message);
      toast.success("تم إرسال النموذج بنجاح");
    },
    onError: (error) => {
      console.error(
        "Error sending Join form:",
        error.response?.data?.message || error.message
      );
      toast.error(error.response?.data?.message || error.message);
    },
  });
};

export default useJoinForm;
