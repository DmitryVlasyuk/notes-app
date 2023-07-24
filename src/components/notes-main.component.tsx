import { Grid } from "@mui/material";
import NotesAdd from "./notes-add.component";
import NotesLayout from "./notes-layout.component";

export default function NotesMain() {

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Grid marginTop={'30px'} marginBottom={'10px'}>
        <NotesAdd />
      </Grid>
      <NotesLayout />
    </Grid>
  )
}