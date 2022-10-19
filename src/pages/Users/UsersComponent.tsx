import { Container, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardContainer from "../../components/common/CardContainer";
import { NoData } from "../../components/common/Container";
import Loader from "../../components/common/Loader";
import { getUsers } from "../../redux/actions/users";
import { User } from "../../redux/types";

const Users = () => {
  const dispatch = useDispatch();
  const users: User[] = useSelector((state: any) => state?.users?.users);
  const loading: boolean = useSelector((state: any) => state?.users?.loading);
  const error: string = useSelector((state: any) => state?.users?.error);
  const actionMessage: any = useSelector((state: any) => state?.users);
  if(users && users?.length > 0){
    users.sort(function(a, b) {
      return ((b.id as number) - (a.id as number));
  })
  }
  useEffect(() => {
    if (actionMessage.users && actionMessage.users.length < 1)
      dispatch(getUsers([]));
  }, []);

  return (
    <Container data-testid="user-container">
      {loading && <Loader />}
      <div
        style={{ textDecoration: "none", textAlign: "right", right: "50px" }}
      >
        <Link
          data-testid="add-user-link"
          to={`/add-edit`}
          style={{ textDecoration: "none", color: "#3f51b5" }}
        >
          Add New User
        </Link>
      </div>
      <hr />
      {!loading &&
        users &&
        users?.length > 0 &&
        users.map((user: User) => <CardContainer user={user} key={user?.id} />)}

      {error && !loading && <Typography>{error}</Typography>}
    </Container>
  );
};
export default Users;
