import axios from "axios";

export async function getConvert(converTo, convertFrom, convertAmount) {

  try {
    const apiKey = "Qi2HZjyy01oVtOlbHXsCcRnL1qILJFoa";
    const apiUrl = "https://api.apilayer.com/fixer/convert";
    const to = converTo;
    const from = convertFrom;
    const amount = convertAmount;

    const params = {
      to,
      from,
      amount
    };

    const config = {
      headers: {
        "apikey": apiKey
      }
    };
    const response = await axios.get(apiUrl, { params, headers: config.headers });
    return response.data;
  } catch (error) {
    console.log('Ошибка запроса конвертации', error);
  }
}