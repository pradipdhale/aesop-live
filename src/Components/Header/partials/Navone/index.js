import * as React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)`
  height: 42px;
  background: #a6672b;
  min-height: 42px;
  font-size:14px;
  text-align: center;
`;
const StyledToolbar = styled(Toolbar)`
  min-height: 42px !important;
  height: 42px;
`;
const SpanLink = styled(Link)`
  color: #ffffff;
  font-size:14px;
  text-decoration:none;
  :hover {
    text-decoration:underline;
    transition:1000;
  }
`;

export default function NavOne() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
          Our privacy policy has been updated effective 31 August.{" "}
          <Typography component="span">
            <SpanLink href="#">Read privacy policy</SpanLink>
          </Typography>
        </Typography>
      </StyledToolbar>
    </StyledAppBar>
  );
}
