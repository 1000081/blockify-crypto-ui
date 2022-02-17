import { CDBLink, CDBBtn } from "cdbreact";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="d-flex align-items-center">
          <CDBLink to="/" className="text-dark footer-link">
            <i class="fas fa-link"></i>
            <span className="ml-4 lead mb-0 font-weight-bold">Blockify</span>
          </CDBLink>
          <span
            className="footer-rem"
            style={{
              fontSize: "3em",
              margin: "-2rem 0px -1.5rem 1rem",
              color: "#C4C4C4",
            }}
          >
            &#8226;
          </span>
          <small className="ml-2 mt-1">
            &copy; blockify.com, 2020. All rights reserved.
          </small>
        </div>
        <div className="footer-rem">
          <CDBBtn flat color="dark" className="py-1 px-2 bg-dark border-0">
            <i className="fab fa-facebook-f"></i>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 py-1 px-2 bg-dark border-0">
            <i className="fab fa-twitter"></i>
          </CDBBtn>
          <CDBBtn flat color="dark" className="py-1 px-2 bg-dark border-0">
            <i className="fab fa-instagram"></i>
          </CDBBtn>
        </div>
      </footer>
    </>
  );
};

export default Footer;
