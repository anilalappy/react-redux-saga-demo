import React, { useEffect } from "react";
import {
  CardContent,
  Button,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  Snackbar,
} from "@material-ui/core";
import { User } from "../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/actions/users";
import { Link } from "react-router-dom";
import { Alert } from "@material-ui/lab";

type Props = {
  user: User;
};
const CardContainer: React.FC<Props> = ({ user }) => {
  const [selectedUser, setSelectedUser] = React.useState<User>();
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const actionMessage: any = useSelector((state: any) => state.users);
  const users: any = useSelector((state: any) => state.users.users);
 
  const dispatch = useDispatch();
  const deleteUserHandler = (user:User) => {
    setSelectedUser(user)
    setOpen(true)
    // dispatch(deleteUser(user));
  }
  const deleteUserAction = () => {
    dispatch(deleteUser(selectedUser,users));
    setOpen(false)
  }

  useEffect(() =>{
    if(actionMessage && actionMessage?.actionMessage?.message) setAlert(true)

  },[actionMessage]) 

  const vertical = 'top';
  const horizontal  = 'right';

  const { id, name, username, email, address } = user;
  return (
      <div style={{width:'100%',backgroundColor:'#bcbcf7',margin:'1rem 0 1rem 0',border:'1px solid #6161ed',borderRadius:'10px'}}>
      <Grid container>
        <Grid item xs={9}>
          <CardContent>
            <Typography style={{ fontSize: 14 }} gutterBottom>
              Name: {name}
            </Typography>
            <Typography style={{ marginBottom: 1.5 }}>Username: {username}</Typography>
            <Typography variant="subtitle2" style={{ marginBottom: 1.5 }}>Email: {email}</Typography>
            <Typography variant="subtitle2" style={{ marginBottom: 1.5 }}>Address: </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: 1.5,marginLeft:'0.5rem' }}>City: {address?.city}</Typography>
            <Typography variant="subtitle2" style={{ marginBottom: 1.5,marginLeft:'0.5rem' }}>ZipCode: {address?.zipcode}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2} style={{textAlign:'left',margin:'auto'}}>
          <Link to={`/add-edit/${id}`} style={{textDecoration:'none'}} ><Button color="primary" size="small">Edit</Button></Link>
          <Button onClick={() => deleteUserHandler(user)} color="secondary" size="small">Delete</Button>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
        <Dialog
          open={open}
          onClose={() => setOpen(true)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete this user?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => {setOpen(false)}}>No</Button>
            <Button onClick={()=> deleteUserAction()} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={alert} autoHideDuration={2000} onClose={()=>setAlert(false)}>
        <Alert onClose={()=>setAlert(false)} severity={actionMessage?.actionMessage?.type} style={{ width: '100%' }}>
          {actionMessage?.actionMessage?.message}
        </Alert>
      </Snackbar>
        </div>
  );
};

export default CardContainer;
