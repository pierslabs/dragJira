import { Entry } from "@/interfaces";
import { EntriesState } from "./EntriesProvider";

type EntriesActionType =
  | { type: "ADD-Entry"; payload: Entry }
  | { type: "UPDATE-Entry"; payload: Entry };

export const EntriesReducer = (
  state: EntriesState,
  action: EntriesActionType
) => {
  switch (action.type) {
    case "ADD-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "UPDATE-Entry":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };

    default:
      return state;
  }
};
