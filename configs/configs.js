const configs = {
  colors: {
    primary: "#D4AF37",
    secondary: "#E3BE46",
    dark: "#0A100D",
    light: "#FFF",
    red: "#B80C09",
    pink: "#F4989C",
    green: "#49DCB1",
  },
  template: {
    index: {
      panel: {
        bg: "#0A100D",
        color: "#0A100D",
      },
      drawer: {
        header: "yellow.400",
        btnClose: "yellow",
      },
      fixedPanel: {
        bg: "#D4AF37",
        color: "#0A100D",
        hamburgerMenu: "gray",
        active: {
          color: "yellow.400",
          bg: "gray.800",
        },
      },
      headerBanner: {
        color: "white",
        activeInput: "yellow.400",
        placeholder: "#eee",
        bannerBtn: "gray",
        btnColor: "gray.900",
        textBanner: "gray.900",
        bannerColor: "#0A100D",
      },
      body: {
        sendingPanelBg: "gray.200",
        sendingColor: "gray.800",
        headingColor: "gray.900",
        cards: {
          cardsOffBg: "yellow.400",
          cardsOffColor: "gray.100",
          primaryColor: "gray.900",
          discountColor: "gray.400",
          heart: "red",
          btns: "yellow",
        },
        seeMore: "yellow",
        promotion: "white",
        promotionBtn: "gray",
        promotionBtnColor: "gray.900",
      },
    },
    footer: {
      bg: "yellow.400",
      heading: "white",
      text: "gray.900",
    },
    productsPage: {
      allCategory: {
        bg: "yellow.400",
        color: "gray.900",
      },
      accordion: {
        headerColor: "gray.900",
        itemColor: "gray.800",
        subItem: "yellow.400",
      },
      product: {
        activeColor: "yellow",
        color: "gray.900",
        activeTagTheme: "blue",
        inactiveTagTheme: "red",
        searchButtom: "yellow",
      },
    },
    product: {
      radiogroup: {
        bg: "yellow.400",
        border: "yellow.500",
        color: "black",
      },
      btnCart: "yellow",
      descBg: "gray.100",
    },
    chart: {
      bgBanner: "yellow.400",
      colorBanner: "gray.900",
      btnCalc: "yellow",
    },
    checkout: {
      bgBanner: "yellow.400",
      colorBanner: "gray.900",
      tabsColor: "yellow",
      radioColor: "yellow",
    },
  },
  carousel: {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  },
  carouselProduct: {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  },
};

export default configs;
