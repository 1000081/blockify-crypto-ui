import { formatDate } from "../util/Stringutil";

const CoinRow = ({ coin }) => {
  //"MM/DD/YYYY"
  return (
    <>
      <td>
        <img
          alt="panelImage"
          src={coin.logo}
          className="pane-image"
          size="md"
        />
        {coin.name}
      </td>
      <td className="table-rem">{coin.symbol}</td>
      <td className="table-rem">{coin.chain}</td>
      <td className="text-success text-center">
        {/* <i className="fas fa-arrow-up"></i> 20% */}
        {formatDate(coin.launchDt)}
      </td>
      <td className="table-rem">${coin.price}</td>
      <td>${coin.marketCap}</td>
      <td>
        <button
          type="button"
          class="btn btn-outline-dark"
          data-mdb-ripple-color="dark"
        >
          <span>🚀</span>
          {/* <i class="fas fa-rocket"></i> */}
          {coin.vote}
        </button>
      </td>
    </>
  );
};
export default CoinRow;
