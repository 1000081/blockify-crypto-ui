import { formatDate } from "../util/Stringutil";
import { useCoin } from "../containers/contexts/CoinContext";
import { MDBLink } from "mdbreact";
import { useHistory } from "react-router-dom";
import { CDBInput } from "cdbreact";
import { MDBBtn } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
const CoinRow = ({ coin }) => {
  const { voteCoin, showCoinDetails } = useCoin();

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
        <MDBLink
          onClick={() => handleDetailClick(coin)}
          to="#"
          className="text-white"
        >
          <img
            alt="panelImage"
            src={coin.logo}
            className="pane-image"
            size="sm"
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
        <Button variant="dark" onClick={() => handleVoteButtonClick(coin)}>
          <span style={{ size: 10 }}>
            <i className="fas fa-rocket fa-lg"></i>
          </span>
          <span className="ml-2">{coin.vote}</span>
        </Button>
      </td>
    </>
  );
};
export default CoinRow;
