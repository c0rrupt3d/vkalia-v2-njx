export const Button = {
    baseStyle: {
      fontFamily: "Sen",
      textTransform: "uppercase",
    },
    sizes: {
      sm: {
        fontSize: 'xs',
        px: '0.75rem',
        py: '0.5rem'
      },
      md: {
        fontSize: 'md',
        px: '1rem',
        py: '0.5rem'
      },
      lg: {
        fontSize: 'lg',
        px: '1.5rem',
        py: '0.75rem'
      }
    },
    variants: {
      main: (props: any) => ({
        fontWeight: "500",
        letterSpacing: "0.025rem",
        color: "#fff",
        borderBottom: `1px solid`,
        borderColor:  props.colorMode === "light" ? "material.0" : "material.1",
        padding: "0px",
        borderRadius: "0px",
        transition: "all 0.3s ease-in-out",
        _hover: {
          color: props.colorMode === "light" ? "material.0" : "material.1",
          // borderColor: "transparent",
          // bg: props.colorMode === "light" ? "material.0.5" : "material.1.5",
        }
      }),
      header: (props: any) => ({
        fontWeight: "500",
        letterSpacing: "0.025rem",
        color: props.colorMode === "light" ? "material.0" : "material.1",
        borderRadius: "15px",
        transition: "all 0.3s ease-in-out",
        _hover: {
          // transform: "scale(1.1)",
          color: "#fff",
          transform: "scale(0.9)",
        }
      }),

      header_invert: (props: any) => ({
        fontWeight: "500",
        letterSpacing: "0.04rem",
        color: props.colorMode === "light" ? "material.1" : "material.0",
        borderRadius: "15px",
        transition: "all 0.3s ease-in-out",
        _hover: {
          // transform: "scale(1.1)",
          color: "#fff",
          transform: "scale(0.94)",
        }
      }),
      theme: (props: any) => ({
        fontWeight: "500",
        letterSpacing: "0.025rem",
        borderRadius: "50%",
        bg: props.colorMode === "light" ? "material.0" : "material.1",
        color: props.colorMode === "light" ? "material.1" : "material.0",
        transition: "all 0.3s ease-in-out",
        _hover: {
          // transform: "scale(1.1)",
          color: "#fff",
        },
        // _focus: {
        //   transform: "rotate(359deg)",
        //   transition: "all 0.3s ease-in-out",
        // }
      }),
    }
  }