import { createContext, useContext, Context } from "react";
import { IconButton } from "@mui/material";
import {
  Brightness7 as Brightness7Icon,
  Brightness4 as Brightness4Icon,
} from "@mui/icons-material";
import { useTheme } from "@mui/system";
import { useMediaQuery, Typography } from "@mui/material";

export type ThemeToggleButtonProps = {
  ColorModeContext: Context<{ toggleColorMode: () => void }>;
};

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const mobileCheck = useMediaQuery("(min-width: 500px)");
  const { ColorModeContext = createContext({ toggleColorMode: () => {} }) } =
    props;
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      {mobileCheck && <Typography>{theme.palette.mode}</Typography>}
      <IconButton
        sx={{ mr: 2 }}
        title={theme.palette.mode + " mode"}
        aria-label={theme.palette.mode + " mode button"}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
};

export default ThemeToggleButton;
