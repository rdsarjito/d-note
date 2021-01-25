import { useState } from 'react;'

const useInput = (intialvalue = '') => {
  const [value, setValue] = useState(intialvalue);
  const reset = () => {
    setValue(intialvalue)
  };
  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value)
    }
  };
  return [value, bind, reset]
};