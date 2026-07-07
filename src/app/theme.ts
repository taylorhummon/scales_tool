import { SANS_FONT } from "./fonts"
import { createTheme } from "@mantine/core"


export const theme = createTheme({
  fontFamily: SANS_FONT.style.fontFamily,
  primaryColor: "yellow",
  breakpoints: {
    xs: "576px",
    sm: "700px",
    md: "992px",
    lg: "1200px",
    xl: "1408px",
  },
})
