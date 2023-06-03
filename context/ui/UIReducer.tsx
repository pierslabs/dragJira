import { UIState } from "./UIProvider";

type UIActtionType =
  | { type: "UI-OpenSideBar" }
  | { type: "UI-CloseSideBar" }
  | { type: "UI-SetIsAdding"; payload: boolean }
  | { type: "UI-StartDragging" }
  | { type: "UI-EndDragging" };

export const uiReducer = (state: UIState, action: UIActtionType): UIState => {
  switch (action.type) {
    case "UI-OpenSideBar":
      return { ...state, sidemenuOpen: true };
    case "UI-CloseSideBar":
      return { ...state, sidemenuOpen: false };
    case "UI-SetIsAdding":
      return { ...state, isAddingEntry: action.payload };
    case "UI-StartDragging":
      return { ...state, isDragging: true };
    case "UI-EndDragging":
      return { ...state, isDragging: false };

    default:
      return state;
  }
};
