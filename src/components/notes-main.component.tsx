import { Grid } from "@mui/material";
import NotesAdd from "./notes-add.component";
import NotesSearch from "./notes-search.component";
import NotesDisplay from "./notes.component";

export default function NotesMain() {

  return (
    <Grid container>
      <NotesSearch />
      <NotesAdd />
      <NotesDisplay />
    </Grid>
  )
}