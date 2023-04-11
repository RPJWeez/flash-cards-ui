import { AppBar, Box, Toolbar, Typography } from "@mui/material"

export const TopBar = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{position: 'sticky'}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        FlashCard.io
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}