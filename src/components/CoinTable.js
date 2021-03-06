import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import {
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTableFoot,
} from "mdb-react-ui-kit";
import { useState } from "react";
import CoinModal from "./CoinModal";
import CoinRow from "./CoinRow";
import { coinTableMeta } from "./TableMetaData";

const CoinTable = (data) => {
  const [open, setOpen] = useState(false);

  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div>
          <CoinModal
            open={open}
            onCloseModal={onCloseModal}
            head={"Login"}
            body={"Please, login to vote"}
          />
        </div>
      )}

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
                <CoinRow coin={coin} isAdmin={data.isAdmin} setOpen={setOpen} />
              </tr>
            ))}
        </MDBTableBody>
      </CDBTable>
    </>
  );
};

export default CoinTable;
