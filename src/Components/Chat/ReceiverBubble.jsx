import React from "react";
import { Box } from "@mui/material";

const ReceiverBubble = (props) => {
  return (
    <>
      <Box className="speech left">
        <p>{props.message}</p>
      </Box>
    </>
  );
};

export default ReceiverBubble;
