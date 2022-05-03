// Generate automaticaly by dbuilder
import React from "react";

import { Box, ButtonIcon, Icon, Image, Title } from "@billers/library";

const MovieCard = (props) => {
  const {
    ROOT,
    oqosev,
    img,
    blcshc,
    watchList,
    ayfdwt,
    IconStar,
    kbfzgd,
    title,
    xsjcej,
    date,
    adcsjt,
    rating,
  } = props;
  return (
    <Box {...ROOT}>
      <ButtonIcon
        {...blcshc}
        Icon={<Icon {...ayfdwt} {...IconStar} />}
        {...watchList}
      />
      <Image {...oqosev} {...img} />
      <Title {...kbfzgd} {...title} />
      <Title {...xsjcej} {...date} />
      <Box {...adcsjt} {...rating} />
    </Box>
  );
};

export default MovieCard;

MovieCard.defaultProps = {
  ROOT: {
    tag: "div",
    className: "movie-card",
    css: {
      width: "20%",
      position: "relative",
      textAlign: "center",
      marginTop: "16px",
      paddingTop: "8px",
      paddingRight: "8px",
      paddingBottom: "8px",
      paddingLeft: "8px",
    },
  },
  oqosev: {
    alt: "Image description for better SEO",
    src: "https://image.tmdb.org/t/p/w500//8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
    dynamic: true,
    css: {
      width: "100%",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
    },
  },
  blcshc: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "inherit",
    css: {
      position: "absolute",
      right: "12px",
      top: "12px",
      background: "#252675",
      zIndex: "10",
      "&:hover": { color: "#252675", background: "#FFFFFFCC" },
    },
  },
  ayfdwt: {
    color: "inherit",
    icon: "FaRegStar",
    fontSize: "inherit",
    hidden: false,
  },
  kbfzgd: {
    variant: "h2",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "18px" },
  },
  xsjcej: {
    variant: "overline",
    text: "{{date}}",
    gutterBottom: false,
    noWrap: false,
    css: { color: "#C8C8C8" },
  },
  adcsjt: { tag: "div" },
};
