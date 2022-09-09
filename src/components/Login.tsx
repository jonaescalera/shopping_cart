import { Box, Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="login">
      <h1>registrarse</h1>
      <Box
        sx={{
          display: "flex",
          width: 400,
          height: 400,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "solid 1px black",
          //margin: "100px 300px 100px 500px",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        {/* <div> */}
        <TextField
          required
          id="outlined-required"
          label="User"
          // defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        {/* </div> */}

        <Button variant="contained" disableElevation color="primary">
          Sign In
        </Button>
      </Box>
    </div>
  );
};

export default Login;
