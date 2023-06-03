import { FC, useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer } from "./UIReducer";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_ITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

interface UIContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UIProvider: FC<UIContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_ITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI-OpenSideBar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI-CloseSideBar" });
  };

  const setIsAddingentry = (isAddingEntry: boolean) => {
    dispatch({ type: "UI-SetIsAdding", payload: isAddingEntry });
  };

  const startDragging = () => {
    dispatch({ type: "UI-StartDragging" });
  };

  const endDragging = () => {
    dispatch({ type: "UI-EndDragging" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //methods
        openSideMenu,
        closeSideMenu,
        setIsAddingentry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
