export const Drawer = {
    variants: {
        navMenu : (props: any) => ({
            color: props.colorMode === "light" ? "material.0" : "material.1",
            background: props.colorMode === "light" ? "material.1" : "material.0",
            transition: "all 0.3s ease-in-out",
            letterSpacing: "0.025rem",
            fontWeight: "500",

    })
}
}