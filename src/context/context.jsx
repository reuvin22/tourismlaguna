import { createContext, useContext } from "react";

export const FormContext = createContext({
    initialFields: []
})

export const NavigationContext = createContext({
    activePage: null,
    onPage: () => {}
})
export const useFormContext = () => useContext(FormContext);
export const useNavigationContext = () => useContext(NavigationContext);