import { createContext, useContext } from 'react'
import { useForm, FormProvider } from "react-hook-form"

const FormContext = createContext({});

export const FormProviderWrapper = ({ children, data = {} }) => {
  const methods = useForm({ defaultValues: data });

  return (
    <FormContext.Provider value={methods}>
      <FormProvider {...methods}>{children}</FormProvider>
    </FormContext.Provider>
  );
};

const useFormContext = () => useContext(FormContext);


export const InputControl = ({ name = '', placeholder }) => {
  const { register } = useFormContext();
  return <input {...register(name)} placeholder={placeholder} />;
};

export const DropdownControl = ({ name = '', options = [] }) => {
  const { register } = useFormContext();
  return (
    <select {...register(name)}>
      <option value="">Select</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export const RadioButtonControl = ({ name = '', options = [] }) => {
  const { register } = useFormContext();
  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            {...register(name)}
            value={option.value}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export const TextAreaControl = ({ name = '', placeholder = '' }) => {
  const { register } = useFormContext();
  return <textarea {...register(name)} placeholder={placeholder} />;
};

export const VerticalLayout = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    {children}
  </div>
);

export const HorizontalLayout = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
    {children}
  </div>
);

export const COMPONENTS = {
  InputControl,
  DropdownControl,
  RadioButtonControl,
  TextAreaControl,
  VerticalLayout,
  HorizontalLayout
}
