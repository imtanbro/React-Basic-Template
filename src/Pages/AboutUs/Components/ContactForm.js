import React from "react";
import { Container, TextField, Button, Box } from "@mui/material";

const ContactForm = ({
  name,
  email,
  mobile,
  message,
  nameReset,
  emailReset,
  mobileReset,
  messageReset,
  setContactUsData,
}) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "#1c1c1c",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
        color: "white",
      }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": { marginBottom: "1.5rem" },
        }}
      >
        <TextField
          fullWidth
          label="Name"
          variant="filled"
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          InputProps={{
            style: { backgroundColor: "#333", color: "white" },
          }}
          onChange={(e) => {
            name.current = e.target.value;
          }}
          ref={nameReset}
        />
        <TextField
          fullWidth
          label="Email"
          variant="filled"
          type="email"
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          InputProps={{
            style: { backgroundColor: "#333", color: "white" },
          }}
          onChange={(e) => {
            email.current = e.target.value;
          }}
          ref={emailReset}
        />
        <TextField
          fullWidth
          label="Mobile Number"
          variant="filled"
          type="tel"
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          InputProps={{
            style: { backgroundColor: "#333", color: "white" },
          }}
          onChange={(e) => {
            mobile.current = e.target.value;
          }}
          ref={mobileReset}
        />
        <TextField
          fullWidth
          label="Message"
          variant="filled"
          multiline
          rows={4}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          InputProps={{
            style: { backgroundColor: "#333", color: "white" },
          }}
          onChange={(e) => {
            message.current = e.target.value;
          }}
          ref={messageReset}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#6200ea",
            color: "white",
            fontWeight: "bold",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: "#3700b3",
            },
          }}
          onClick={() => {
            console.log(name.current);
            console.log(email.current);
            console.log(mobile.current);
            console.log(message.current);

            setContactUsData((data) => [
              ...data,
              {
                name: name.current,
                email: email.current,
                mobile: mobile.current,
                message: message.current,
              },
            ]);
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
