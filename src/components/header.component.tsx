import MuiToolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';


export default function Header() {

  return (
    <div>
      <MuiAppBar position="fixed" sx={{ backgroundColor: '#DAAD86' }}>
        <MuiToolbar sx={{ justifyContent: 'space-between' }}>
          Notes app
        </MuiToolbar>
      </MuiAppBar>
      <MuiToolbar />
    </div>
  );
}
