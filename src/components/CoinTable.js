import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import CoinRow from "./CoinRow";

const CoinTable = (values) => {
  return (
    <>
      <CDBTable borderless responsive>
        <CDBTableHeader color="light">
          <tr>
            <th>{values.values.headers[0].name}</th>
            <th className="table-rem">{values.values.headers[1].name}</th>
            <th className="table-rem">{values.values.headers[2].name}</th>
            <th>{values.values.headers[3].name}</th>
            <th className="table-rem">{values.values.headers[4].name}</th>
            <th>{values.values.headers[5].name}</th>
            <th>{values.values.headers[6].name}</th>
          </tr>
          {/* <tr>
            {values.values.headers.map((header) => (
              <th>{header.name}</th>
            ))}
          </tr> */}
        </CDBTableHeader>
        <CDBTableBody>
          {values.values.data.map((coin) => (
            <tr key={coin.name}>
              <CoinRow coin={coin} />
            </tr>
          ))}
        </CDBTableBody>
      </CDBTable>
    </>
  );
};

export default CoinTable;
