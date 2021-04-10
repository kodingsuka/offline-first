import { createContext, useState } from "react";

export const UIContext = createContext({
  confirmModalOpen: false,
  formModalOpen: false,
  toggleConfirmModalOpen: () => {},
  toggleFormModalOpen: () => {},
});

export const UIContextProvider: React.FC = ({ children }) => {
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const toggleConfirmModalOpen = () => {
    setConfirmModalOpen(!confirmModalOpen);
  };
  const toggleFormModalOpen = () => {
    setFormModalOpen(!formModalOpen);
  };
  return (
    <UIContext.Provider
      value={{
        confirmModalOpen,
        formModalOpen,
        toggleConfirmModalOpen,
        toggleFormModalOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
