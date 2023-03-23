import { Grid, Box } from "@mui/material";

const form = () => {
  return (
    <div>
      {/* <Grid container spacing={{ xs: 1.5, md: 2 }}>


      </Grid> */}

      <Box
        sx={{
          width: 816,
          height: 1248,
          backgroundColor: "lightgray",
        }}
      >
        <Grid container spacing={{ xs: 1.5, md: 1 }}>
          <Grid item xs={12} sm={6}>
            <h3>
              {" "}
              Zank Pos <br /> Enterprises
            </h3>
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <h6>
              {" "}
              Zank Pos <br /> Enterprises
            </h6>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default form;
