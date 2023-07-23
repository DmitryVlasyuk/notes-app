import { Grid } from "@mui/material";
import Footer from "./footer.component";
import Header from "./header.component";
import NotesMain from "./notes-main.component";


export default function NotesPage() {
    return (
        <Grid container>
            <Header />
            <NotesMain />
            {/* <Footer /> */}
        </Grid>
    );
}