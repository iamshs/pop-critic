import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Rating } from "@mui/material";
import {AiFillStar } from "react-icons/ai"


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#343434",
 borderRadius : "10px" ,
  boxShadow: 24,
  p: 4,
  textAlign: "center"
 
};

const RateModal = ({ open, setOpen ,setValue,name }) => {
  const handleClose = () => setOpen(false);
 

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        
        <Typography id="modal-modal-title" variant="h6" component="h2">
       <div className="flex items-center justify-center">
       <AiFillStar size={40} color='white' />  <h1 className="text-amber-300 font-semibold text-2xl ">  Rate this  </h1><AiFillStar size={40} color='white'/>
       </div>
       <h1 className="text-3xl font-bold text-white">{name} </h1>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <Rating
        name="simple-controlled"
        size="large"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        </Typography>
      </Box>
    </Modal>
  );
};

export default RateModal;
