import { createContext, useContext } from "react";

export const FormContext = createContext({
  initialFields: [],
  design: null,
  onSubmit: () => {},
  title: ''
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
  hoverClick: false,
  actions: false
});
export const ModalContext = createContext({
  formInputs: [],
  openModal: () => {},
  modalSet: false,
  title: ''
});

export const useModalContext = () => useContext(ModalContext);
export const useTableContext = () => useContext(TableContext);
export const useFormContext = () => useContext(FormContext);
export const useNavigationContext = () => useContext(NavigationContext);
