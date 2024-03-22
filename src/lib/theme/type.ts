declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            // add new colors here in future is needed to excellent palette support
            red: {
                500: string
            },
            green: {
                500: string
            }

        }
    }
    interface PaletteOptions {
        custom?: {
            // add new colors here in future is needed to excellent palette support
        }
    }
}
export { }