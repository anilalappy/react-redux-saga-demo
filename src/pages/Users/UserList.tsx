import { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { getRequest } from "../../utils/services";
import { insertionSort } from "../../utils/algorithms";

const createData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const UserList = () => {
  const [users, setUsers] = useState<any>([]);
  // insertionSort([5, 2, 4, 6, 1, 3]);
  const getUserList = async () => {
    const users = await getRequest("users");
    setUsers(users);
  };
  useEffect(() => {
    getUserList();
  }, []);

  return (
    <TableContainer>
      <Table
        style={{ width: "100%", justifyContent: "center", textAlign: "center" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Zipcode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(({ id, name, username, email, address }: any) => (
            <TableRow
              key={id}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{username}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{address?.city}</TableCell>
              <TableCell>{address?.zipcode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserList;
