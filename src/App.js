import { ColorMode, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "./views/navbar/NavBar";
import Home from './views/home'

const App = () => {

  const [theme, colorMode] = useMode();

  return (
    <ColorMode.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="content">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorMode.Provider>
  );
}

export default App;
