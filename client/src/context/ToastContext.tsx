'use client'
import React, { createContext, useContext, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { ToastContextType, ToastProviderProps } from '@/src/interfaces/IToastContext';

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('Necesitas el provider');
  }
  return context;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const toast = useRef<Toast>(null);

  const showError = (message: string) => {
    toast.current?.show({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 3000,
    });
  };

  const showSuccess = (message: string) => {
    toast.current?.show({
      severity: 'success',
      summary: 'Éxito',
      detail: message,
      life: 3000,
    });
  };

  return (
    <ToastContext.Provider value={{ showError, showSuccess }}>
      {children}
      <Toast ref={toast} position="bottom-right" />
    </ToastContext.Provider>
  );
};
