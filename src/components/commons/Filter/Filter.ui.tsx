// Generate automaticaly by dbuilder
import React from "react";

import { Box } from "@billers/library";

const Filter = (props) => {
  const { ROOT, vqaatq, filter, lqbgwn } = props;
  return (
    <Box {...ROOT}>
      <Box {...vqaatq} {...filter} />
      <Box {...lqbgwn} />
    </Box>
  );
};

export default Filter;

Filter.defaultProps = {
  ROOT: {
    tag: "div",
    css: { display: "flex", justifyContent: "space-around" },
  },
  vqaatq: { tag: "div", css: { flex: "1", display: "flex" } },
  lqbgwn: { tag: "div" },
};
