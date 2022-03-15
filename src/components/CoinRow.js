import { formatDate } from "../util/Stringutil";
import { CoinContext } from "../containers/contexts/CoinContext";
import { useContext } from "react";
import { MDBLink } from "mdbreact";
import { useHistory } from "react-router-dom";
import { CDBInput } from "cdbreact";
const CoinRow = ({ coin }) => {
  const { voteCoin, showCoinDetails } = useContext(CoinContext);

  const handleVoteButtonClick = (vote) => {
    voteCoin(vote);
  };

  const history = useHistory();
  const handleDetailClick = (coin) => {
    showCoinDetails(coin);
    history.push("/coinDetails/" + coin.name);
  };

  return (
    <>
      <td>
        <MDBLink onClick={() => handleDetailClick(coin)}>
          <img
            alt="panelImage"
            src={coin.logo}
            className="pane-image"
            size="md"
          />
          {coin.name}
        </MDBLink>
      </td>
      <td>{coin.symbol}</td>
      <td>{coin.chain}</td>
      <td className="text-success">
        {/* <i className="fas fa-arrow-up"></i> 20% */}
        {formatDate(coin.launchDt)}
      </td>
      <td>${coin.price}</td>
      <td>${coin.marketCap}</td>
      <td>
        <button
          type="button"
          className="btn btn-outline-dark"
          data-mdb-ripple-color="dark"
          onClick={() => handleVoteButtonClick(coin)}
        >
          <span>🚀</span>
          {/* <i className="fas fa-rocket"></i> */}
          {coin.vote}
        </button>
      </td>
    </>
  );
};
export default CoinRow;
