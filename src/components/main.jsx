import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import * as React from 'react';

export const Main = (props) => {

  return (
    <div>
      <Box>
        <Typography variant='h4' ml={20} mt={5}>Simple flash cards app</Typography>
      </Box>
      <Box
      margin={2}
        marginLeft={20}
      >
      <Button color="success" variant="contained">Create New Deck</Button>
      </Box>
      <Box
        display='flex'
        justifyContent='left'
        alignItems='left'
        margin={2}
        marginLeft={20}
      >
        <TextField sx={{width: 400}} mi id='outlined-basic' label='Deck ID' variant='outlined' />
        <Button variant="contained">Recall Deck</Button>
      </Box>
    </div >
  );
}
