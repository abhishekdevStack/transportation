import React from "react";

import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";

const AppLogo = styled.img`
  max-height: 56px;
`;

export default function MiniDrawer(props) {
  return (
    <div>
      <AppBar color="default">
        <Toolbar>
          <AppLogo
            src="https://image.shutterstock.com/image-vector/transport-logo-template-260nw-351283481.jpg"
            alt="TRANSPORT"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
