import { createContext, useEffect, useState, useContext } from "react";
import ApiService from "../../api/ApiService";
import emailjs, { send } from "emailjs-com";

export const CoinContext = createContext();

export function useCoin() {
  return useContext(CoinContext);
}

export const CoinContextProvider = (props) => {
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

  const [preSaleCoins, setPreSaleCoins] = useState([]);
  const [newCoins, setNewCoins] = useState([]);
  const [promotedCoins, setPromotedCoins] = useState([]);
  const [normalCoins, setNormalCoins] = useState([]);
  const [atbCoins, setAtbCoins] = useState([]);

  useEffect(() => {
    retrieveAllCoins();
  }, []);

  // filteredList(coinList, coinType)

  const retrieveAllCoins = () => {
    ApiService.findAll("/coins")
      .then((response) => {
        let allCoins = response.data;
        setCoins(allCoins);
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

  const editCoin = (coin) => {
    ApiService.update("coins", coin._id, coin)
      .then((response) => {
        console.log("-----response" + response.data);
        retrieveAllCoins();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addCoin = (coin) => {
    ApiService.save("coins", coin)
      .then((response) => {
        console.log("-----response" + response.data);
        retrieveAllCoins();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveCoinByName = (name) => {
    ApiService.findAll("/coins?name=" + name)
      .then((response) => {
        setCoin(response.data);
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
        editCoin,
        retrieveCoinByName,
      }}
    >
      {props.children}
    </CoinContext.Provider>
  );
};

// export default CoinContextProvider;
