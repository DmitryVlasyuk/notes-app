import { Grid } from "@mui/material";
import NotesAdd from "./notes-add.component";
import NotesLayout from "./notes-layout.component";
import NotesDisplay from "./notes-layout.component";
import NotesTags from "./notes-tags.components";

export default function NotesMain() {

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Grid>
        <NotesAdd />
      </Grid>
      <NotesLayout />
      {/* <NotesDisplay /> */}
    </Grid>
  )
}