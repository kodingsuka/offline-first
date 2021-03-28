import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const NoteListItem: React.FC = () => {
  return (
    <div className="flex items-center w-full px-2 py-4">
      <div className="flex-row flex-1">
        <h4 className="text-xs text-gray-500">15 Mar 2021</h4>
        <h2 className="font-semibold pb-0 mb-0">Gaji bulanan</h2>
        <h4 className="text-xs capitalize text-green-600">income</h4>
      </div>
      <h3 className="mr-2 text-lg font-bold text-gray-800">Rp 12.000.000</h3>
      <div>
        <FontAwesomeIcon
          icon={faPencilAlt}
          className="mx-2 text-green-700 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="mx-2 text-red-700 cursor-pointer"
        />
      </div>
    </div>
  );
};
