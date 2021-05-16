import React, { useState } from 'react';

export const LaureateContext = React.createContext<{
  selectedLaureateId?: string;
  setSelectedLaureateId?:(id?: string) => void;
    }>({});

export const LaureateContainer = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const [selectedLaureateId, setSelectedLaureateId] = useState<string>();

  return (
    <LaureateContext.Provider
      value={{
        selectedLaureateId,
        setSelectedLaureateId,
      }}
    >
      {children}
    </LaureateContext.Provider>
  );
};
