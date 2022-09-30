import React from "react";
import { Box } from "@mui/system";
import Avatar from '@mui/material/Avatar';

const SenderBubble = (props) => {
  return (
    <>
      <Box className="rcbubble-holder">
        <Box className="speechsender right">
          <p>{props.message}</p>
        </Box>
        <Box>
          <Avatar alt="profileimage" src="https://img.freepik.com/free-photo/beautiful-brun
          ette-serious-girl-portrait_23-2148176372.jpg?w=826&t=st=1664561550~exp=16645
          62150~hmac=09707c183fd0a1dff8d9bd5dafc90dd5a3cbeaf39598bf227fe2d99e6f258f0a"/>
        </Box>
      </Box>
    </>
  );
};

export default SenderBubble;
