import { useEffect, useState } from "react";
import { getConvert } from "../../../requests/axios/get-convert/get-convert";

export const useHandleClickConvert = () => {
  const storageResult = JSON.parse(localStorage.getItem('resultConvert'));
  const [amountValue, setAmountValue] = useState(1);
  const [convertToValue, setConvertToValue] = useState('RUB');
  const [convertFromValue, setConvertFromValue] = useState('USD');
  const [dataConvert, setDataConvert] = useState(storageResult);
  const [signal, setSignal] = useState(null);

  const handleChangeAmountField = (event) => {
    const value = event.target.value;
    setAmountValue(value)
  };
  const handleChangeFieldTo = (event) => {
    const value = event.target.value;
    setConvertToValue(value)
  };
  const handleChangeFieldFrom = (event) => {
    const value = event.target.value;
    setConvertFromValue(value)
  };
  const handleClickConvert = async (event) => {
    event.preventDefault();
    const data = await getConvert(convertToValue, convertFromValue, amountValue);
    setDataConvert(data);
  }

  useEffect(() => {
    let updateSignal;
  
    localStorage.setItem('resultConvert', JSON.stringify(dataConvert));
  
    if (dataConvert) {
      updateSignal = setTimeout(() => {
        setSignal('нужно обновить');
      }, 60000);
    }
  
    return () => {
      clearTimeout(updateSignal);
    };
  }, [dataConvert]);
  

  return {
    handleChangeAmountField,
    handleClickConvert,
    handleChangeFieldTo,
    handleChangeFieldFrom,
    amountValue,
    convertToValue,
    convertFromValue,
    dataConvert,
    signal
  }
}