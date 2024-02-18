import { Grid, Paper, Typography } from "@mui/material";

function Login() {
  return (
    <Grid>
      <Paper
        elevation={10}
        sx={{ p: 2, height: "70vh", width: 400, margin: "20px auto" }}
      >
        <Grid align="center">
          <Typography variant="h3"> Sign In</Typography>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Login;
