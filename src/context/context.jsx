import { createContext, useContext } from "react";

export const FormContext = createContext({
    initialFields: []
})

export const useFormContext = () => useContext(FormContext);