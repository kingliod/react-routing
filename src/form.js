import { Grid, Box } from "@mui/material";
import Barcode from "react-barcode";
const form = () => {
  const barcodeValue = "202300003269";
  const barcodeStyle = {
    width: "200px",
    height: "100px",
    // backgroundColor: "#fff",
    // border: "1px solid #000",
    // borderRadius: "5px",
    // margin: "20px",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // fontSize: "18px",
    // fontWeight: "bold",
  };

  return (
    <div style={barcodeStyle}>
      <Barcode value={barcodeValue} />
    </div>
  );
};

export default form;
