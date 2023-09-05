import { ColorMode, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./views/navbar/NavBar";

const App = () => {

  const [theme, colorMode] = useMode();

  return (
    <ColorMode.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="App">
          <main className="content">
            <NavBar />
          </main>
        </div>
      </ThemeProvider>
    </ColorMode.Provider>
  );
}

export default App;
