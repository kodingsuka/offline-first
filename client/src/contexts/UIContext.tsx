import { createContext, useState } from "react";

export const UIContext = createContext({
  confirmModalOpen: false,
  toggleConfirmModalOpen: () => {},
});

export const UIContextProvider: React.FC = ({ children }) => {
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const toggleConfirmModalOpen = () => {
    setConfirmModalOpen(!confirmModalOpen);
  };
  return (
    <UIContext.Provider value={{ confirmModalOpen, toggleConfirmModalOpen }}>
      {children}
    </UIContext.Provider>
  );
};
