import { ReactSearchAutocomplete } from "react-search-autocomplete";
import React, { useState } from "react";

const CoinSearch = (coins) => {
  const [coin, setCoin] = useState({});

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log("selected item--------------" + JSON.stringify(item));
    console.log("Coin before set--------------" + JSON.stringify(coin));
    setCoin(item);
    console.log("Coin after set--------------" + JSON.stringify(coin));
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  let amount = 2400007000;
  let formatValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  }).format(amount);
  console.log(
    "Formatted value------------------------------------" + formatValue
  );

  return (
    <>
      <ReactSearchAutocomplete
        items={coins}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        // styling={{ zIndex: 2 }} // To display it on top of the search box below
        fuseOptions={{ keys: ["name", "chain"] }}
        autoFocus
        styling={
          ({
            keys: ["name", "chain"],
            backgroundColor: "red",
            height: "40px",
            iconColor: "#0dcaf0",
            color: "white",
            border: "2px solid #0dcaf0",
            boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
          },
          { zIndex: 2 })
        }
      />
    </>
  );
};

export default CoinSearch;
