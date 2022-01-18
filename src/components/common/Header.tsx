import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography
          variant="h5"
          noWrap
          component="div"
          data-testid="header-logo"
          sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
        >
          Product List View
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
