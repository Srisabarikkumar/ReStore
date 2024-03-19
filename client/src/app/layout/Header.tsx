import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h7",
  fontWeight: "bold",
  "&:hover": { color: "grey.500" },
  "&.active": { color: "text.secondary" },
};

interface Props {
  darkMode: boolean;
  darkThemeHandler: () => void;
}

export default function Header({ darkMode, darkThemeHandler }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
            RE-STORE
          </Typography>
          <Switch checked={darkMode} onChange={darkThemeHandler} />
        </Box>

        <List sx={{ display: "flex" }}>
          {midLinks.map((link) => (
            <ListItem
              key={link.path}
              component={NavLink}
              to={link.path}
              sx={navStyles}
            >
              {link.title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex" }}>
            {rightLinks.map((link) => (
              <ListItem
                key={link.path}
                component={NavLink}
                to={link.path}
                sx={navStyles}
              >
                {link.title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
