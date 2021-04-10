import { useContext } from "react";
import { ConfirmModal } from "./components/ConfirmModal";
import { FormModal } from "./components/FormModal";
import { NoteList } from "./components/NoteList";
import { UIContext } from "./contexts/UIContext";

function App() {
  const {formModalOpen, toggleFormModalOpen} = useContext(UIContext)
  return (
    <div className="flex justify-center min-h-screen p-2 bg-gray-200">
      <div className="my-6 md:w-1/3 sm:w-3/4">
        <div className="flex items-center justify-between py-4 mb-2">
          <h1 className="font-sans text-lg font-bold tracking-wide text-gray-800">
            Financial Notes
          </h1>
          <button className="px-4 py-2 font-sans text-xs tracking-wide text-white bg-blue-500 rounded shadow-sm focus:oultline-none hover:bg-blue-600" onClick={toggleFormModalOpen}>
            Add New Note
          </button>
        </div>
        <h5 className="text-xs text-center text-gray-400 uppercase">
          Money Left
        </h5>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Rp 12.000.000
        </h2>
        <NoteList />
      </div>
      <ConfirmModal />
      <FormModal />
    </div>
  );
}

export default App;
