import { formatDate } from "../util/Stringutil";
import { useCoin } from "../containers/contexts/CoinContext";
import { MDBLink } from "mdbreact";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useAuth } from "../containers/contexts/AuthContext";

const CoinRow = ({ coin, isAdmin }) => {
  const { voteCoin, showCoinDetails, adminReviewCoin } = useCoin();
  const {
    cryptoUser,
    editCryptoUser,
    currentUser,
    findCryptoUserByEmail,
    voteCryptoUser,
  } = useAuth();
  const [votableCoins, setVotableCoins] = useState([]);
  const [status, setStatus] = useState([]);
  const history = useHistory();

  const filterVotableCoins = (votes) => {
    const filteredCoins =
      votes && votes.filter((vote) => vote.votedAt > new Date());
    return filteredCoins.coin;
  };

  useEffect(() => {
    if (cryptoUser && cryptoUser.votes.length) {
      filterVotableCoins(cryptoUser.votes);
      handleCheck(coin.name);
    }
  }, []);

  const handleVoteButtonClick = (vote) => {
    voteCoin(vote);

    const user = {
      _id: cryptoUser._id,
      email: cryptoUser.email,
      votes: [{ coin: vote.name, votedAt: Date.now() }],
    };

    const selectedVote = filterArrayElementByEdit(cryptoUser.votes, vote.name);

    if (
      cryptoUser &&
      cryptoUser.votes.length &&
      selectedVote.length &&
      selectedVote[0].coin === vote.name
    ) {
      voteCryptoUser(user);
    } else {
      editCryptoUser(user);
    }
    handleCheck(vote.name);
  };

  const filterArrayElementByEdit = (votes, name) => {
    return votes.filter((element) => {
      return element.coin === name;
    });
  };

  const handleDetailClick = (coin) => {
    showCoinDetails(coin);
    history.push("/coinDetails/" + coin.name);
  };

  const handleReviewButtonClick = (vote) => {
    adminReviewCoin(vote);
    history.push("/review");
  };

  const handleCheck = (val) => {
    const selectedVote = filterArrayElementByEdit(cryptoUser.votes, val);
    if (selectedVote && selectedVote.length) {
      var date1 = selectedVote && new Date(selectedVote[0].votedAt);
      var date2 = new Date();
      var timeDiff = date2.getTime() - date1.getTime();
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (diffDays >>> 1) {
        setStatus(false);
      } else {
        setStatus(true);
      }
    } else {
      setStatus(false);
    }
  };

  const handleMouseOver = (e) => {
    console.log("========MouseOver" + JSON.stringify(e));
  };

  return (
    <>
      <td>
        <MDBLink
          onClick={() =>
            isAdmin ? handleReviewButtonClick(coin) : handleDetailClick(coin)
          }
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
        <Button
          variant="dark"
          onClick={() => handleVoteButtonClick(coin)}
          disabled={status}
          onMouseOver={(e) => handleMouseOver}
        >
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
