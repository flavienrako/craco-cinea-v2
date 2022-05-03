// Generate automaticaly by dbuilder
import React from "react";

import { Box, Container } from "@billers/library";

const WatchList = (props) => {
  const { ROOT, ylylmz, rjlvhg, list } = props;
  return (
    <Box {...ROOT}>
      <Container {...ylylmz}>
        <Box {...rjlvhg} {...list} />
      </Container>
    </Box>
  );
};

export default WatchList;

WatchList.defaultProps = {
  ROOT: {
    tag: "div",
    className: "overlay-black",
    css: {
      minHeight: "100vh",
      paddingTop: "60px",
      paddingBottom: "70px",
      background:
        "url(/images/placeholder_1920.jpg) center / cover no-repeat fixed",
      display: "flex",
      alignItems: "center",
    },
  },
  ylylmz: {
    maxWidth: "md",
    disableGutters: false,
    fixed: false,
    className: "overlay-blur",
    css: {
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: "12px",
      paddingTop: "16px",
      paddingRight: "32px",
      paddingBottom: "16px",
      paddingLeft: "32px",
      background: "#12121230",
      display: "flex",
      alignItems: "center",
      zIndex: "10",
    },
  },
  rjlvhg: {
    tag: "div",
    css: { flex: "1", paddingRight: "32px", paddingLeft: "32px" },
  },
};
