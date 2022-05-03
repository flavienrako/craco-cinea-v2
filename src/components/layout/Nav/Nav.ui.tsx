// Generate automaticaly by dbuilder
import React from "react";

import { Box, ButtonIcon, Icon, Image } from "@billers/library";

const Nav = (props) => {
  const {
    ROOT,
    ignodo,
    xdotvh,
    znvciq,
    rrxwhs,
    famlrk,
    dtqlvo,
    zfjliz,
    gtjzlp,
    pzasoi,
    zlfwva,
    thkcmp,
    nckfpp,
    watchList,
  } = props;
  return (
    <Box {...ROOT}>
      <Box {...ignodo}>
        <Image {...pzasoi} />
        <Box {...rrxwhs}>
          <ButtonIcon {...zfjliz} Icon={<Icon {...gtjzlp} />} />
          <ButtonIcon {...famlrk} Icon={<Icon {...dtqlvo} />} />
          <ButtonIcon {...xdotvh} Icon={<Icon {...znvciq} />} />
          <ButtonIcon {...zlfwva} Icon={<Icon {...thkcmp} />} />
        </Box>
      </Box>
      <Box {...nckfpp} {...watchList} />
    </Box>
  );
};

export default Nav;

Nav.defaultProps = {
  ROOT: {
    tag: "div",
    className: "nav-bar",
    css: {
      paddingTop: "8px",
      paddingRight: "28px",
      paddingLeft: "8px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  },
  ignodo: {
    tag: "div",
    css: {
      borderTopLeftRadius: "110px",
      borderTopRightRadius: "110px",
      borderBottomLeftRadius: "110px",
      borderBottomRightRadius: "110px",
      width: "260px",
      paddingTop: "0px",
      paddingRight: "16px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      background: "#3D3B58B3",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  xdotvh: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    size: "medium",
    color: "secondary",
  },
  znvciq: {
    color: "inherit",
    icon: "FaLinkedinIn",
    fontSize: "inherit",
    hidden: false,
  },
  rrxwhs: { tag: "div" },
  famlrk: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "secondary",
  },
  dtqlvo: {
    color: "inherit",
    icon: "FaInstagram",
    fontSize: "inherit",
    hidden: false,
  },
  zfjliz: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "secondary",
  },
  gtjzlp: {
    color: "inherit",
    icon: "FaGithub",
    fontSize: "inherit",
    hidden: false,
  },
  pzasoi: {
    alt: "Image description for better SEO",
    src: "https://minio.billers.io/billers/app_v2/Me_25ff08b932.png",
    href: "/",
    dynamic: true,
    css: {
      width: "60px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#FFFFFF8F",
      borderTopLeftRadius: "110px",
      borderTopRightRadius: "110px",
      borderBottomLeftRadius: "110px",
      borderBottomRightRadius: "110px",
      background: "#FFFFFF57",
    },
  },
  zlfwva: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "secondary",
  },
  thkcmp: {
    color: "inherit",
    icon: "FaPaperPlane",
    fontSize: "inherit",
    hidden: false,
  },
  nckfpp: { tag: "div", css: { marginRight: "8px", marginLeft: "16px" } },
};
