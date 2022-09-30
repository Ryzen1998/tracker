import React,{useContext} from 'react'
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import chatContext from "../../../Context/ChatContext";

const ChatInput = () => {
  const { setMessage,sendMessage,message} = useContext(chatContext);
  return (
   <>
    {/* //chatinput */}
    <Container
      maxWidth="lg"
      sx={{
        border: "solid 1px rgba(0,0,0,.125)",
        height: "20vh",
        boxShadow: "0px 0px 10px 10px rgba(171,171,171,0.75)",
        borderRadius: "50px",
      }}
    >
      <Stack marginTop='5vh' alignItems={"center"} justifyContent={'center'} direction={{ xs: "row" }}>
        <TextField
          label="Message"
          multiline
          minRows={2}
          maxRows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{width:'70vw'}}
        />
        <Button sx={{marginLeft:'1vw'}}
          onClick={sendMessage}
          disabled={message === "" ? true : false}
          variant="contained"
        >
          Send
        </Button>
      </Stack>
    </Container>
   </>
  )
}

export default ChatInput