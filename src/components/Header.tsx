import {
  Typography,
  Container,
  Toolbar,
  AppBar, 
  Box,
} from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';

export default function Header() {

  return (
    <AppBar position='fixed'>
      <Container maxWidth='sm'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display='flex' alignItems='center' mr={2}>
            <TaskIcon sx={{ mr: 1 }} />
            <Typography variant='h6' component='div'>
              Remainder List
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
