import { ReactNode } from "react";

export interface ToastContextType {
     showError: (message: string) => void;
     showSuccess: (message: string) => void;
}
 
export interface ToastProviderProps {
  children: ReactNode;
}