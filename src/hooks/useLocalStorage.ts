import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Estado para almacenar el valor actual
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Obtener del localStorage por key
      const item = window.localStorage.getItem(key);
      // Parsear el JSON almacenado o retornar el valor inicial
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Si hay error, retornar el valor inicial
      console.error(error);
      return initialValue;
    }
  });

  // Retornar una función envuelta en useCallback que persiste el nuevo valor en localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permitir que el valor sea una función para que tengamos la misma API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Guardar el estado
      setStoredValue(valueToStore);
      // Guardar en localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
} 