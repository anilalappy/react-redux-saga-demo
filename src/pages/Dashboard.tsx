import { Container } from "@material-ui/core";
import {
  Title,
  // Container,
} from "../components/common/Container";
import { insertionSort } from "../utils/algorithms";
import Users from "./Users/UsersComponent";

insertionSort([5, 2, 4, 6, 1, 3]);

const Dashboard = () => (
  <Container data-testid="dashboard-container">
    <Title data-testid="dashboard-title">Dashboard</Title>
    <Users />
  </Container>
);

export default Dashboard;
