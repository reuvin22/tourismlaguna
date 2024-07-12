import { createContext, useContext } from "react";

export const FormContext = createContext({
  initialFields: [],
  design: null,
});

export const NavigationContext = createContext({
  activePage: () => {},
  ref: null,
  onOpenSidebar: () => {},
  openSidebar: null,
  onNavigate: () => {}
});

export const TableContext = createContext({
  tableData: null,
  tableHeader: null,
  hoverClick: false
});
export const ModalContext = createContext({
  openModal: false
});

export const useModalContext = () => useContext(ModalContext);
export const useTableContext = () => useContext(TableContext);
export const useFormContext = () => useContext(FormContext);
export const useNavigationContext = () => useContext(NavigationContext);
