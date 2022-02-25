import { createContext, useEffect, useState } from "react";
import ApiService from "../../api/ApiService";
export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const initialCoin = {
    _id: "",
    name: "",
    logo: "",
    chain: "",
    presale: "",
    description: "",
    contAddress: "",
    launchDt: "",
    marketCap: "",
    price: "",
    telegram: "",
    twitter: "",
    reddit: "",
    discord: "",
    otherChains: "",
    dexToools: "",
    swap: "",
    vote: 0,
    symbol: "",
  };

  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(initialCoin);

  useEffect(() => {
    retrieveAllCoins();
  }, []);

  const retrieveAllCoins = () => {
    ApiService.findAll("/coins")
      .then((response) => {
        setCoins(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const voteCoin = (coin) => {
    let vote = { vote: coin.vote + 1 };
    ApiService.update("coins", coin._id, vote)
      .then((response) => {
        console.log(response.data);
        retrieveAllCoins();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addCoin = (coin) => {
    console.log("coinContext--------------------------" + JSON.stringify(coin));
    ApiService.save("coins", coin)
      .then((response) => {
        console.log("-----response" + response.data);
        retrieveAllCoins();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // let navigate = useNavigate();
  const showCoinDetails = (coin) => {
    setCoin(coin);
    // console.log("Coin Details---------" + JSON.stringify(coin));
    // history.push("/coinDetails");
    // return navigate("/coinDetails");
  };

  return (
    <CoinContext.Provider
      value={{
        coins,
        coin,
        voteCoin,
        retrieveAllCoins,
        addCoin,
        showCoinDetails,
      }}
    >
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
