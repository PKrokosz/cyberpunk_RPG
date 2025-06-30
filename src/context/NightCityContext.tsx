import React, { createContext, useState } from 'react';

export const NightCityContext = createContext({
  selectedDistrict: null as string | null,
  setDistrict: (_id: string) => {},
});

export const NightCityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDistrict, setDistrict] = useState<string | null>(null);
  return (
    <NightCityContext.Provider value={{ selectedDistrict, setDistrict }}>
      {children}
    </NightCityContext.Provider>
  );
};
