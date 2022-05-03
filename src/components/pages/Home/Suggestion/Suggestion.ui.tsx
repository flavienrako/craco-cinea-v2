// Generate automaticaly by dbuilder
import React from "react";

import { Box, Button, Container, Title } from "@billers/library";

const Suggestion = (props) => {
  const {
    ROOT,
    suggestionBg,
    sztvdi,
    date,
    eeoale,
    title,
    ghyokb,
    ysobwc,
    discover,
    pzywjv,
    cewmvu,
    votes,
  } = props;
  return (
    <Box {...ROOT} {...suggestionBg}>
      <Container {...ghyokb}>
        <Box {...pzywjv}>
          <Title {...sztvdi} {...date} />
          <Title {...eeoale} {...title} />
          <Box {...cewmvu} {...votes} />
          <Button {...ysobwc} {...discover} />
        </Box>
      </Container>
    </Box>
  );
};

export default Suggestion;

Suggestion.defaultProps = {
  ROOT: {
    tag: "div",
    className: "suggestion-slide",
    css: {
      minHeight: "100vh",
      background: "linear-gradient(180deg, #F4F4F400 0%, #121212 88%)",
    },
  },
  sztvdi: {
    variant: "h3",
    text: "Release date : {{date}}",
    gutterBottom: false,
    noWrap: false,
    css: {
      fontSize: "18px",
      fontWeight: 300,
      textTransform: "uppercase",
      marginBottom: "12px",
    },
  },
  eeoale: {
    variant: "h1",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "58px", fontWeight: 700, marginTop: "8px" },
  },
  ghyokb: {
    maxWidth: "lg",
    disableGutters: false,
    fixed: false,
    css: {
      minHeight: "calc(80vh - 200px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
  },
  ysobwc: {
    text: "Discover",
    type: "button",
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    size: "large",
    variant: "contained",
    color: "secondary",
    iconStart: false,
    iconEnd: false,
    css: {
      borderTopLeftRadius: "30px",
      borderTopRightRadius: "30px",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
    },
  },
  pzywjv: { tag: "div" },
  cewmvu: { tag: "div", css: { marginBottom: "16px" } },
};
