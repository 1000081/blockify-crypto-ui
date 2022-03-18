import emaijs from "emailjs-com";
import { useState } from "react";

const useEmail = (templateParam, templateName) => {
  const [status, setStatus] = useState(() =>
    sendEmail(templateParam, templateName)
  );
};

//template_6qy0n08

const sendEmail = (templateParam, templateName) => {
  return emaijs
    .send(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      templateName,
      templateParam,
      process.env.REACT_APP_EMAIL_USER_ID
    )
    .then((res) => {
      console.log(res && JSON.stringify(res));
      return res;
    })
    .catch((err) => {
      console.log(err && JSON.stringify(err));
      return err;
    });
};

export default useEmail;
