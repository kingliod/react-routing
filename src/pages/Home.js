import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
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
  padding: theme.spacing(7),
  height: 150,

  textAlign: "center",
  backgroundColor: "lightgrey",
  color: theme.palette.text.secondary,
}));
const Home = () => {
  return (
    <section className="section">
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={{ xs: 1 }}>
          <Grid2 item md={8} sm={12} xs={12}>
            <Item>xs=8</Item>
            <Stack
              direction={{ md: "row", xs: "column", sm: "row" }}
              width={"100%"}
            >
              <Grid2 item md={6} sm={12} xs={12}>
                <Item3> </Item3>
              </Grid2>
              <Grid2 item md={6} sm={12} xs={12}>
                <Item3></Item3>
              </Grid2>
            </Stack>
            <Grid2 item md={12} sm={12} xs={12}>
              <Item3></Item3>
            </Grid2>
          </Grid2>
          <Grid2 item md={4} sm={12} xs={12}>
            <Item2> xs=4</Item2>
          </Grid2>
          <Grid2 item md={12} sm={12} xs={12}>
            <Item>xs=4</Item>
          </Grid2>
          {/* <Grid item md={4} sm={12} xs={12}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <Item>xs=8</Item>
          </Grid> */}
        </Grid2>
      </Box>
    </section>
  );
};

export default Home;
