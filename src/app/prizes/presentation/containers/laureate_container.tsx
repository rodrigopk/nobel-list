import React, { useState } from 'react';

import { Laureate } from '../../domain';

export const LaureateContext = React.createContext<{
  selectedLaureate?: Laureate;
  setSelectedLaureate?:(laureate?: Laureate) => void;
    }>({});

export const LaureateContainer = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const [selectedLaureate, setSelectedLaureate] = useState<Laureate>();

  return (
    <LaureateContext.Provider
      value={{
        selectedLaureate,
        setSelectedLaureate,
      }}
    >
      {children}
    </LaureateContext.Provider>
  );
};
