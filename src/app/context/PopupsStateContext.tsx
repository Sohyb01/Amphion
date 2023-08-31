"use client";

import { createContext, useEffect, useState } from "react";

export type PopupsStateContextValue = {
  popupsState: PopupsState;
  changePopupsState: (string: PopupsState) => void;
} | null;

export type PopupsState = null | "success" | "failure" | "error";

export const PopupsStateContext = createContext<PopupsStateContextValue>(null);

export const PopupsStateContextProvider = (props: any) => {
  const [popupsState, setPopupsState] = useState<PopupsState>(null);

  useEffect(() => {
    if (popupsState !== null) {
      setTimeout(() => {
        setPopupsState(null);
      }, 6000);
    }
  }, [popupsState]);

  const changePopupsState = (newstate: PopupsState) => {
    setPopupsState(newstate);
  };

  const contextValue = { popupsState, changePopupsState };

  return (
    <PopupsStateContext.Provider value={contextValue}>
      {props.children}
    </PopupsStateContext.Provider>
  );
};
