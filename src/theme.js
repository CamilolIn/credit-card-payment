import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//colors
export const colorsTheme = (mode) => ({
  ...(mode === 'dark'
    ? {
      grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414"
      },
      primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#434957",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509"
      },
      greenOk: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922"
      },
      redOk: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f"
      },
      blueOk: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632"
      }
    } : {}
  )
})

//config mui theme
export const themeMuiSettings = (mode) => {
  const colors = colorsTheme(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
          prmary: {
            main: colors.primary[500]
          },
          secondary: {
            main: colors.greenOk[500]
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100]
          },
          background: {
            default: colors.primary[500]
          }
        } : {
          prmary: {
            main: colors.primary[100]
          },
          secondary: {
            main: colors.greenOk[500]
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100]
          },
          background: {
            default: colors.primary[100]
          }
        })
    },
    typography: {
      fontFamily: ["source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      }
    }
  }
}

// color mode

export const ColorMode = createContext({
  toggleColorMode: () => { }
})


export const useMode = () => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeMuiSettings(mode)), [mode])

  return [theme, colorMode];
}
