import React from "react";
import { Box } from "@mui/system";

const SenderBubble = (props) => {
  return (
    <>
      <Box className="speechsender right">
        <p>{props.message}</p>
      </Box>
    </>
  );
};

export default SenderBubble;
