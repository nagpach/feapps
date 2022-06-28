import React from 'react';

function useForm<V = Record<string, any>>(initialValues?: V) {
  const [values, setValues] = React.useState(initialValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues( (v:any) => ({ ...v, [e.target.name]: e.target.value }));
  };

  return {
    values,
    onChange,
  };
}

export default useForm;
