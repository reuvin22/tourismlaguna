import { createContext, useContext } from "react";

export const FormContext = createContext({
  initialFields: [],
  design: null,
  onSubmit: () => {},
  title: '',
  formDesign: ''
});

export const NavigationContext = createContext({
  activePage: () => {},
  ref: null,
  onOpenSidebar: () => {},
  openSidebar: null,
  onNavigate: () => {}
});

export const TableContext = createContext({
  state: '',
  data: null,
  updateModal: false,
  tableData: null,
  tableHeader: null,
  openData: false,
  hoverClick: false,
  actions: false,
  modals: false,
  formInput: [],
  setOpenData: () => {},
  formDesign: '',
  title: '',
  setModalOpen: () => {},
  modalButtons: false
});
export const ModalContext = createContext({
  formInputs: [],
  formDesign: '',
  title: '',
  modalButtons: false,
  modalOpen: false,
  setModalOpen: () => {},
});

export const useModalContext = () => useContext(ModalContext);
export const useTableContext = () => useContext(TableContext);
export const useFormContext = () => useContext(FormContext);
export const useNavigationContext = () => useContext(NavigationContext);
