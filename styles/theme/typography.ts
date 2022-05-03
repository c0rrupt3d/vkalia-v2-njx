export const fonts = {
    heading: "Sen, sans-serif'",
    body: "Nunito, sans-serif'",
  };
  
  export const Heading = {
    sizes: null,
    variants: {
      h1: {
        textStyle: 'h1'
      },
      h2: {
        textStyle: 'h2'
      },
      h3: {
        textStyle: 'h3'
      },
      h4: {
        textStyle: 'h4'
      },
      title: {
        textStyle: "title"
      },
      alt_title :{
        textStyle: "alt_title"
      }
    },

  };
  
  export const Text = {
    sizes: null,
    variants: {
      preTitle: (props: any) => ({
        textStyle: 'preTitle',
        color: props.colorMode === 'light' ? 'neutral.600' : 'neutral.100'
      }),
      subtitle: (props: any) => ({
        textStyle: 'subtitle',
        color: props.colorMode === 'light' ? 'neutral.600' : 'neutral.100'
      }),
      body: (props: any) => ({
        textStyle: 'body',
        color: props.colorMode === 'light' ? 'neutral.600' : 'neutral.200'
      }),
      bodyLight: (props: any) => ({
        textStyle: 'bodyLight',
        color: props.colorMode === 'light' ? 'neutral.700' : 'neutral.200'
      }),
      small: {
        textStyle: 'small'
      }
    },
    defaultProps: {
      variant: 'body'
    }
  };
  
  export const textStyles = {
    title: {
      fontSize: { base: '36px', lg: '58px' },
      fontWeight: 500,
      lineHeight: { base: '160%', lg: '125%' },
    },
    alt_title: {
      fontSize: { base: '24px', lg: '44px' },
      fontWeight: 400,
      lineHeight: { base: '160%', lg: '125%' },
      marginTop: "5rem"
    },
    h1: {
      fontSize: { base: '32px', lg: '56px' },
      fontWeight: 700,
      lineHeight: { base: '140%', lg: '125%' }
    },
    h2: {
      fontSize: { base: '24px', xl: '36px' },
      fontWeight: 700,
      lineHeight: { base: '150%', lg: '130%' }
    },
    h3: {
      fontSize: { base: '20px', xl: '28px' },
      fontWeight: 700,
      lineHeight: { base: '150%', lg: '140%' }
    },
    h4: {
      fontSize: { base: '18px', xl: '24px' },
      fontWeight: 700,
      lineHeight: { base: '150%', lg: '140%' }
    },
    subtitle: {
      fontSize: { base: '18px', xl: '24px' },
      fontWeight: 400,
      lineHeight: { base: '180%', lg: '180%' },
      mt: { base: "2rem", lg: "3rem" },
      w: { base: "100%", "2xl": "100%" },
      mb: { base: "1rem", lg: "2rem" },
    },
    preTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      casing: 'uppercase',
      lineHeight: '150%'
    },
    body: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '150%'
    },
    bodyLight: {
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: '150%'
    },
    small: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '160%'
    }
  };
  