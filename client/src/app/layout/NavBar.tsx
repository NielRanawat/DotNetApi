import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Typography , MenuItem} from '@mui/material';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <MenuItem>
              <Typography>Activities</Typography>
            </MenuItem>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
