import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core";
import { Chat, Home } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Link className="styleless-link" to="/">
            <IconButton edge="start" color="inherit">
              <Home />
            </IconButton>
          </Link>

          <span style={{ flex: 1 }}></span>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<Chat />}
            style={{ borderRadius: "4px" }}
            onClick={() => console.log("TODO - Implement Chat")}
          >
            Chat
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
