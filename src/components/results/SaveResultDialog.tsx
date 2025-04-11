import React from 'react';

interface SaveResultDialogProps {
  examName: string;
  onExamNameChange: (name: string) => void;
  onSave: () => void;
  onClose: () => void;
}

export const SaveResultDialog: React.FC<SaveResultDialogProps> = ({
  examName,
  onExamNameChange,
  onSave,
  onClose
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Guardar resultado</h3>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="examName">
            Nombre del intento:
          </label>
          <input
            id="examName"
            type="text"
            value={examName}
            onChange={(e) => onExamNameChange(e.target.value)}
            placeholder="Ej: Primer intento"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={onSave}
            disabled={!examName.trim()}
            className={`font-bold py-2 px-4 rounded ${
              examName.trim() 
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}; 