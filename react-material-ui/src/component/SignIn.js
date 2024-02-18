import { Box, Button, Container, Paper, Typography } from "@mui/material";

function SignIn() {
  const serviceList = ["Server 1", "Server 2", "Server 3"];
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{ my: 4, textAlign: "center", color: "primary.main" }}
      >
        Services
      </Typography>
      <Typography variant="h2">Overview</Typography>
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {serviceList.map((service) => (
          <Paper elevation={3} sx={{ width: { xs: 1, md: 320 } }}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h3">{service}</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

export default SignIn;
