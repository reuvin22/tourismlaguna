import { createContext, useContext } from "react";

export const FormContext = createContext({
    initialFields: [],
    design: null,
})

export const NavigationContext = createContext({
    activePage: () => {},
    ref: null,
    onOpenSidebar: () => {},
    openSidebar: false
})

export const TableContext = createContext({
    tableData: null,
    tableHeader: null
})

export const useTableContext = () => useContext(TableContext);
export const useFormContext = () => useContext(FormContext);
export const useNavigationContext = () => useContext(NavigationContext);