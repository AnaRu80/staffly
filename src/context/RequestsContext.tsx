import React, { createContext, useContext, useEffect, useState } from 'react';
import { requestService } from '../services/requestService';
import { NewRequest, Request } from '../types/Request';

interface RequestsContextType {
  requests: Request[];
  addRequest: (newRequest: NewRequest) => void;
  deleteRequest: (id: string) => void;
}

const RequestsContext = createContext<RequestsContextType | undefined>(undefined);

export const RequestsProvider = ({ children }: { children: React.ReactNode }) => {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    requestService.getAll().then(setRequests);
  }, []);

  const addRequest = async (newRequest: NewRequest) => {
    const created = await requestService.create(newRequest);
    setRequests(prev => {
      const exists = prev.some(r => r.id === created.id);
      return exists ? prev : [...prev, created];
    });
  };

  const deleteRequest = (id: string) => {
    requestService.delete(id).then(() => {
      setRequests((prev) => prev.filter((r) => r.id !== id));
    });
  };

  return (
    <RequestsContext.Provider value={{ requests, addRequest, deleteRequest }}>
      {children}
    </RequestsContext.Provider>
  );
};

export const useRequests = () => {
  const context = useContext(RequestsContext);
  if (!context) throw new Error('useRequests must be used within a RequestsProvider');
  return context;
};
