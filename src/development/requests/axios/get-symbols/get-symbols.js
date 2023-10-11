import axios from "axios";

export async function getSymbols() {
  try {
    const apiKey = "Qi2HZjyy01oVtOlbHXsCcRnL1qILJFoa";
    const apiUrl = "https://api.apilayer.com/fixer/symbols";

    const config = {
      headers: {
        "apikey": apiKey
      }
    };

    const response = await axios.get(apiUrl, { headers: config.headers });
    localStorage.setItem('symbols', JSON.stringify(response.data.symbols))
    return response.data;
  } catch (error) {
    console.log('Ошибка запроса конвертации', error);
  }
}