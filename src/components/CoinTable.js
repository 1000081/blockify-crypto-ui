import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import {
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTableFoot,
} from "mdb-react-ui-kit";
import CoinRow from "./CoinRow";
import { coinTableMeta } from "./TableMetaData";

const CoinTable = (data) => {
  return (
    <>
      {/* <CDBTable className="text-white" responsiveSm borderless>
        <CDBTableHeader color="black">
          <tr>
            <th>{coinTableMeta[0].header}</th>
            <th>{coinTableMeta[1].header}</th>
            <th>{coinTableMeta[2].header}</th>
            <th>{coinTableMeta[3].header}</th>
            <th>{coinTableMeta[4].header}</th>
            <th>{coinTableMeta[5].header}</th>
            <th>{coinTableMeta[6].header}</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody textWhite>
          {data &&
            data.values.map((coin) => (
              <tr key={coin.name} style={{ bgcolor: "white" }}>
                <CoinRow coin={coin} />
              </tr>
            ))}
        </CDBTableBody>
      </CDBTable> */}
      <CDBTable className="text-white" responsiveSm>
        <MDBTableHead dark>
          <tr>
            <th>
              <b>{coinTableMeta[0].header}</b>
            </th>
            <th>
              <b>{coinTableMeta[1].header}</b>
            </th>
            <th>
              <b>{coinTableMeta[2].header}</b>
            </th>
            <th>
              <b>{coinTableMeta[3].header}</b>
            </th>
            <th>
              <b>{coinTableMeta[4].header}</b>
            </th>
            <th>
              <b>{coinTableMeta[5].header}</b>
            </th>
            <th>
              <center>
                <b>{coinTableMeta[6].header}</b>
              </center>
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody className="text-white">
          {data &&
            data.values.map((coin) => (
              <tr key={coin.name}>
                <CoinRow coin={coin} />
              </tr>
            ))}
        </MDBTableBody>
      </CDBTable>
    </>
  );
};

export default CoinTable;
