import * as React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)`
  height:80px;
  background: #fffef2;
  font-size: 14px;
`;

const StyledToolbar=styled(Toolbar)`
display: flex;
justify-content: space-between;
height: 80px;
`

const SpanLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin-right:20px;
  padding: 4px;
  font-family: 'Suisse Medium', sans-serif;
  font-size: 14px;
  font-weight: normal;
  :hover {
    cursor:pointer;
  }
`;
const LeftMenuItems = styled(Typography)`
`
const RightMenuItems = styled(Typography)`
`
export default function MenuBar() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LeftMenuItems>
          <SpanLink>Skin Care</SpanLink>
          <SpanLink>Body & Hand</SpanLink>
          <SpanLink>Hair</SpanLink>
          <SpanLink>Fragrance</SpanLink>
          <SpanLink>Home</SpanLink>
          <SpanLink>Kits & Travel</SpanLink>
          <SpanLink>Gifts</SpanLink>
          <SpanLink>Read</SpanLink>
          <SpanLink>Stores</SpanLink>
        </LeftMenuItems>
        <RightMenuItems>
          <SpanLink>Login</SpanLink>
          <SpanLink>Cart</SpanLink>
        </RightMenuItems>
      </StyledToolbar>
    </StyledAppBar>
  );
}
