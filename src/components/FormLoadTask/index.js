import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { useTasks } from 'hooks/useTasks';

export default function FormLoadTask() {
  const [loadId, setLoadId] = useState("");
  const { setId } = useTasks();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (loadId.length > 0) {
      setId(loadId);
      setLoadId("");
    }
  }

  const handlerChange = (e) => {
    setLoadId(e.target.value);
  }

  return (
    <div className="FormLoadTask">
      <form onSubmit={handlerSubmit}>
        <FormControl sx={{ display: "flex", justifyContent: "center", flexFlow: 'row' }} margin="dense" >
          <TextField fullWidth id="standard-basic" label="Cargar una lista" variant="standard" placeholder="Cargar una lista ya existente" required onChange={handlerChange} value={loadId} />
          <Button type="submit" variant="contained">Cargar</Button>
        </FormControl>
      </form>
    </div>
  );
}