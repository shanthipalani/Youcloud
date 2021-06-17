import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Rating from "react-rating";

// import Fade from '@material-ui/core/Fade';
import './addreview.css'
// import Modal from 'react-bootstrap/Modal'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth:'500px',
    borderRadius:'100px'

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth:'640px',
    borderRadius:'20px' 
    
    
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="review-filter">
      <div className="d-flex review_header_content">
        <div className="text-center">Reviews 16</div>
        <Rating
          emptySymbol="fas fa-star empty-star-color"
          fullSymbol="fas fa-star rated-star-color"
          initialRating={5}
          readonly={true}
          start={0}
          stop={5}
          fractions={2}
          className="ml-2"
        />
        <select className="sortby ml-3">
          <option value="Sortby" >Sortby</option>
        </select>
      <button type="button" className="addreview_modal ml-3" onClick={handleOpen}>
        Add Review
      </button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
       
        <div className="modalwidth">
          <div className={classes.paper} >
            <p className="reviewheading">Add Your Review</p>
            <form>
              <div>
                <label htmlFor="Name" >Name</label>
                <input type="text" id="Name" name="reviewer_name"  placeholder="Enter your name" className="reviewer"/>
              </div>
              <div className="mt-3">
                <label htmlFor="Comments" >Comments</label>
                <div>
                <textarea rows="4"  id="Comments" name="reviewer_name" placeholder="Enter your comments" className="review_comments"/>
                </div>
              </div>
              <div className="mt-3">
              <label htmlFor="Rating" >Star Rating</label>
              <div>
                <select className="rating_select"> 
                  <option value="1 star">1 Star</option>
                  <option value="2 star">2 Star</option>
                  <option value="3 star" selected>3 Star</option>
                  <option value="4 star">4 Star</option>
                  <option value="5 star">5 Star</option>
                </select>
                </div>
              </div>
              <div className="mt-4">
                <button className="btd submit">Submit</button>
                <button className="btd delete ml-3">Delete</button>
              </div>
            </form>

            
          </div>
          </div>
        
      </Modal>
    </div>
  );
}
