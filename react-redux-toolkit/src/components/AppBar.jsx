import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { getItemSelector } from "../redux/slices/cartSlice";

export default function NavBar() {
  const Items = useSelector(getItemSelector);
  const total = Items.reduce((prev, curr) => prev + curr.price, 0);

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Redux-Toolkit Practice
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Items: {Items.length} price: ${total.toFixed(2)}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
