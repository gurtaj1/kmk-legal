import { toast } from "sonner";

export const showToast = {
  success: (message: string) => {
    toast.success(message, {
      duration: 4000,
      className: "bg-white border-green-500 text-green-800",
    });
  },
  error: (message: string) => {
    toast.error(message, {
      duration: 5000,
      className: "bg-white border-red-500 text-red-800",
    });
  },
  loading: (message: string) => {
    toast.loading(message, {
      className: "bg-white border-kmk-logoBlue text-kmk-logoBlue",
    });
  },
};
