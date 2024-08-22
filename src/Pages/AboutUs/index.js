import React, { memo, useRef, useState } from "react";
import SectionHeading from "../../Common/Components/SectionHeading";
import ContactForm from "./Components/ContactForm";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const AboutUs = () => {
  const name = useRef();
  const email = useRef();
  const mobile = useRef();
  const message = useRef();
  const nameReset = useRef();
  const emailReset = useRef();
  const mobileReset = useRef();
  const messageReset = useRef();

  const [contactUsData, setContactUsData] = useState([]);

  console.log(contactUsData);

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <SectionHeading heading={"About Us"} />
      <ContactForm
        name={name}
        email={email}
        mobile={mobile}
        message={message}
        nameReset={nameReset}
        emailReset={emailReset}
        mobileReset={mobileReset}
        messageReset={messageReset}
        setContactUsData={setContactUsData}
      />

      <div className="flex flex-col justify-center items-center">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Mobile</TableCell>
                <TableCell align="right">Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactUsData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.mobile}</TableCell>
                  <TableCell align="right">{row.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default memo(AboutUs);
