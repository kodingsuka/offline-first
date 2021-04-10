import React, { useContext } from "react";
import { UIContext } from "../contexts/UIContext";

interface Props {}

export const FormModal: React.FC<Props> = () => {
  const { formModalOpen, toggleFormModalOpen } = useContext(UIContext);
  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto ${
        formModalOpen ? "visible" : "invisible duration-200"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className={`fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 ${
            formModalOpen
              ? "ease-out duration-300 opacity-100"
              : "ease-in duration-200 opacity-0"
          }`}
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className={`inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
            formModalOpen
              ? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100"
              : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }`}
        >
          <form action="#" method="POST">
            <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center divide-y divide-gray-200 sm:mt-0 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Add New Note
                  </h3>
                  <div className="pt-2 mt-2">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <input
                          placeholder="Description"
                          type="text"
                          name="description"
                          id="description"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Category
                        </label>
                        <label htmlFor="category-income" className="px-2 py-1 mr-1 text-green-800 bg-green-200 border border-green-800 rounded cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            id="category-income"
                            className="hidden"
                          /><span>Income</span>
                        </label>
                        <label htmlFor="category-expense" className="px-2 py-1 mr-1 text-red-800 bg-red-200 border border-red-800 rounded cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            id="category-expense"
                            className="hidden"
                          /><span>Expense</span>
                        </label>
                      </div>
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="nominal"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nominal
                        </label>
                        <div className="flex mt-1 rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                            Rp
                          </span>
                          <input
                            type="number"
                            name="nominal"
                            id="nominal"
                            className="flex-1 block w-full border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Save
              </button>
              <button
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={toggleFormModalOpen}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
