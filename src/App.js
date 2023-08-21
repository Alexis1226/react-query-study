import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./App.css";

function App() {
  const { data, error, isLoading } = useQuery(
    ["text"],
    () => {
      return axios(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=krw"
      );
    }
  );
  return (
    <div className="App">
      {error ? <p>Oops! Error bumped!</p> : null}
      {isLoading ? <p>Wait! Still Loading...</p> : null}
      {data?.data?.bitcoin?.krw
        ? data.data.bitcoin.krw
        : null}
    </div>
  );
}

export default App;
