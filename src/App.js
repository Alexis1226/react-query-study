import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./App.css";

function App() {
  const priceQuery = useQuery(
    ["price"],
    () => {
      return axios(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=krw"
      );
    },
    { refetchInterval: 1000 * 5 }
  );

  const supportQuery = useQuery(
    ["support"],
    () => {
      return axios(
        "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
      );
    },
    { refetchInterval: 1000 * 15 }
  );

  return (
    <div className="App">
      {priceQuery.error ? <p>Oops! Error bumped!</p> : null}
      {priceQuery.isLoading ? (
        <p>Wait! Still Loading...</p>
      ) : null}
      {priceQuery.data?.data?.bitcoin?.krw
        ? priceQuery.data.data.bitcoin.krw
        : null}
    </div>
  );
}

export default App;
