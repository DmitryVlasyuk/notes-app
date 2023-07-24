import { Grid } from "@mui/material";
import Header from "./header.component";
import NotesMain from "./notes-main.component";


export default function NotesPage() {
    return (
        <Grid container>
            <Header />
            <NotesMain />
        </Grid>
    );
}