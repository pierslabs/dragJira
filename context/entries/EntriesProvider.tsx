import { FC, useReducer } from "react";

import { v4 as uuidv4 } from "uuid";

import { Entry } from "@/interfaces";
import { EntriesContext } from "./EntriesContext";
import { EntriesReducer } from "./EntriesReducer";

export interface EntriesState {
  entries: Entry[];
}

const entriesInitialState: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "pending: Create a new Nestjs boiler plate ",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      _id: uuidv4(),
      description: "in-progress: Add new resource to Clients",
      createdAt: Date.now() - 1900000,
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      description: "done: Refactor list-items code",
      createdAt: Date.now() - 3900000,
      status: "done",
    },
  ],
};

interface EntriesProviderContextProps {
  children: JSX.Element | JSX.Element[];
}

export const EntriesProvider: FC<EntriesProviderContextProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(EntriesReducer, entriesInitialState);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: "pending",
      createdAt: Date.now(),
    };

    dispatch({ type: "ADD-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "UPDATE-Entry", payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
