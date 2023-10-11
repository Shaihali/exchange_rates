import { useSelector } from 'react-redux';
import convert from './convert.module.css';
import form from '../../../components/forms/form.module.css';
import { useHandleClickConvert } from './convert.logic';

export function Convert() {
  const state = useSelector(state => state.symbols);
  const symbolsKeysArray = Object.keys(state);
  const {
    amountValue,
    convertToValue,
    convertFromValue,
    dataConvert,
    signal,
    handleChangeAmountField,
    handleChangeFieldTo,
    handleChangeFieldFrom,
    handleClickConvert} = useHandleClickConvert()

  return (
    <div className={convert.convert_box}>
      <h2 className={convert.title}>Конвертер валют</h2>
      <div className={convert.convert_form}>
        <form className={convert.form}> 
          <input 
            className={form.input}
            type="text"
            value={amountValue}
            onChange={(event) => handleChangeAmountField(event)} 
          />
          <select 
            id="selectFrom"
            className={convert.select}
            onChange={(event) => handleChangeFieldFrom(event)}
            value={convertFromValue}
          >
            {
              symbolsKeysArray.map((key) => (
                <option key={key} value={key}>{key}</option>
              ))
            }
          </select>
          <div>=</div>
          <select 
            id="selectTo"
            className={convert.select}
            value={convertToValue}
            onChange={(event) => handleChangeFieldTo(event)}
          >
            {
              symbolsKeysArray.map((key) => (
                <option key={key} value={key}>{key}</option>
              ))
            }
          </select>
          <button className={form.button} onClick={(event) => handleClickConvert(event)}>Конвертировать</button>
        </form>
      </div>
      <div className={convert.content}>
        <span className={convert.date}>{dataConvert && `ЦБ РФ на ${dataConvert.date}`}</span>
        <div className={convert.result_box}>
          <span className={convert.result_amount}>{ dataConvert && dataConvert.query.amount }</span>
          <span className={convert.result_fromTo}>{ dataConvert && dataConvert.query.from }</span>
          <span>{dataConvert && ' = '}</span>
          <span className={convert.result}>{ dataConvert && dataConvert.result }</span>
          <span className={convert.result_fromTo}>{ dataConvert && dataConvert.query.to }</span>
          <span className={convert.signal}>{signal}</span>
        </div>
      </div>
    </div>
  );
}