// Generate automaticaly by dbuilder
import React from "react";

import { Box, Container } from "@billers/library";

const Home = (props) => {
  const {
    ROOT,
    mbzabo,
    SuggestionList,
    aalnwv,
    noogzo,
    affuai,
    MovieList,
    scnpul,
    Suggestion,
    bkwvgs,
    ukpvyv,
    Pagination,
    fbpkiy,
    Filter,
  } = props;
  return (
    <Box {...ROOT}>
      <Box {...scnpul} {...Suggestion} />
      <Box {...bkwvgs}>
        <Container {...aalnwv}>
          <Box {...mbzabo} {...SuggestionList} />
        </Container>
        <Container {...noogzo}>
          <Box {...fbpkiy} {...Filter} />
          <Box {...affuai} {...MovieList} />
          <Box {...ukpvyv} {...Pagination} />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

Home.defaultProps = {
  ROOT: {
    tag: "div",
    className: "home-page",
    css: {
      paddingTop: "0px",
      paddingRight: "0px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      background: "#121212",
    },
  },
  mbzabo: { tag: "div", css: { minHeight: "380px" } },
  aalnwv: {
    maxWidth: "lg",
    disableGutters: false,
    fixed: false,
    css: { position: "relative", display: "flex", flexDirection: "column" },
  },
  noogzo: {
    maxWidth: "lg",
    disableGutters: false,
    fixed: false,
    css: { marginTop: "70px", marginBottom: "70px" },
  },
  affuai: { tag: "div", css: { display: "flex", flexWrap: "wrap" } },
  scnpul: {
    tag: "div",
    className: "suggestion-bg",
    css: { minHeight: "90vh" },
  },
  bkwvgs: {
    tag: "div",
    css: { position: "sticky", marginTop: "-243px", zIndex: "1" },
  },
  ukpvyv: {
    tag: "div",
    css: { marginTop: "32px", display: "flex", justifyContent: "center" },
  },
  fbpkiy: {
    tag: "div",
    id: "filter",
    css: { marginTop: "16px", marginBottom: "16px" },
  },
};
