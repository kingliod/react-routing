import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { display, margin } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: 300,
  textAlign: "center",
  backgroundColor: "lightgrey",
  color: theme.palette.text.secondary,
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: 615,
  textAlign: "center",
  backgroundColor: "lightgrey",
  color: theme.palette.text.secondary,
}));
const Item3 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: 150,

  textAlign: "center",
  backgroundColor: "lightgrey",
  color: theme.palette.text.secondary,
}));
const Home = () => {
  return (
    <section className="section">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 1.5, md: 1 }}>
          <Grid item md={8} sm={12} xs={12}>
            <Item>xs=8</Item>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Grid item md={12} sm={12} xs={12}>
                <Item3 sx={{ margin: 0.5 }}> </Item3>
              </Grid>
              <Grid item md={9} sm={12} xs={12}>
                <Item3 sx={{ margin: 0.5 }}></Item3>
              </Grid>
            </div>
            <Grid item md={12} sm={12} xs={12}>
              <Item3></Item3>
            </Grid>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Item2> xs=4</Item2>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Item>xs=4</Item>
          </Grid>
          {/* <Grid item md={4} sm={12} xs={12}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <Item>xs=8</Item>
          </Grid> */}
        </Grid>
      </Box>
    </section>
  );
};

export default Home;
