import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core";
import { Chat, Home } from "@material-ui/icons";
import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Home />
          </IconButton>

          <span style={{ flex: 1 }}></span>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<Chat />}
            style={{ borderRadius: "4px" }}
          >
            Chat
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
