// Generate automaticaly by dbuilder
import React from "react";

import { Box, Button, Icon, Title } from "@billers/library";

const Item = (props) => {
  const { ROOT, tqfokt, title, yzxzta, removeButton, qqesmz } = props;
  return (
    <Box {...ROOT}>
      <Title {...tqfokt} {...title} />
      <Button {...yzxzta} IconStart={<Icon {...qqesmz} />} {...removeButton} />
    </Box>
  );
};

export default Item;

Item.defaultProps = {
  ROOT: {
    tag: "div",
    css: {
      maxHeight: "220px",
      marginTop: "16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  tqfokt: {
    variant: "h4",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { flex: "1", marginBottom: "16px", paddingRight: "14px" },
  },
  yzxzta: {
    text: "Remove from list",
    type: "button",
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    size: "medium",
    variant: "contained",
    color: "secondary",
    iconStart: true,
    iconEnd: false,
    css: {
      borderTopLeftRadius: "30px",
      borderTopRightRadius: "30px",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
    },
  },
  qqesmz: {
    color: "inherit",
    icon: "FaRegTrashAlt",
    fontSize: "inherit",
    hidden: false,
  },
};
