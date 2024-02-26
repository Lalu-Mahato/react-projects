import { ThemeProvider } from "@emotion/react";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={() => <div>Home</div>} />
        <Route exact path="/services" Component={() => <div>Services</div>} />
        <Route exact path="/customsoftware" Component={() => <div>Custom Software</div>} />
        <Route exact path="/mobileapps" Component={() => <div>Mobile Apps</div>} />
        <Route exact path="/websites" Component={() => <div>Websites</div>} />
        <Route exact path="/about" Component={() => <div>About Us</div>} />
        <Route exact path="/contact" Component={() => <div>Contact Us</div>} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
