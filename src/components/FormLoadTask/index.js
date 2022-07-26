import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';

export default function FormLoadTask() {
  return (
    <div className="FormLoadTask">
      <form>
        <FormControl sx={{ display: "flex", justifyContent: "center", flexFlow: 'row' }} margin="dense" >
          <TextField fullWidth id="standard-basic" label="Cargar una lista" variant="standard" placeholder="Cargar una lista ya existente" required />
          <Button type="submit" variant="contained">Cargar</Button>
        </FormControl>
      </form>
    </div>
  );
}