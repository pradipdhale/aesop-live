import * as React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)`
  height: 42px;
  background: #252525;
  min-height: 42px;
  font-size: 14px;
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

export default function NavTwo() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
          <Typography component="span">
            <SpanLink href="#">
              Click and Collect is now available at select stores. Enjoy
              complimentary carbon neutral shipping on orders over HK$400&nbsp;&nbsp;&nbsp;<Typography style={{fontSize:'16.9px'}} component="span">{' '}+</Typography>
            </SpanLink>
          </Typography>
        </Typography>
      </StyledToolbar>
    </StyledAppBar>
  );
}
