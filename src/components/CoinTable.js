import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import CoinRow from "./CoinRow";
import { coinTableMeta } from "./TableMetaData";

const CoinTable = (data) => {
  return (
    <>
      <CDBTable borderless responsive>
        <CDBTableHeader color="light">
          <tr>
            <th>{coinTableMeta[0].header}</th>
            <th className="table-rem">{coinTableMeta[1].header}</th>
            <th className="table-rem">{coinTableMeta[2].header}</th>
            <th>{coinTableMeta[3].header}</th>
            <th className="table-rem">{coinTableMeta[4].header}</th>
            <th>{coinTableMeta[5].header}</th>
            <th>{coinTableMeta[6].header}</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          {data &&
            data.values.map((coin) => (
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
