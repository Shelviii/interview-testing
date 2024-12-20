import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box sx={{ p: 2 }}>
      <TextField label="Name" variant="outlined" />
      <Button variant="contained" sx={{ ml: 2 }}>
        Submit
      </Button>
    </Box>
    </div>
  );
}

export default App;
