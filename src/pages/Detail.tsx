import { Container, Title } from "../components/common/Container";

const Detail = () => (
  <Container>
    <Title>Detail Page</Title>
    <div className="d-flex flex-column bd-highlight mb-3">
      <div className="p-2 bd-highlight">Flex item 1</div>
      <div className="p-2 bd-highlight">Flex item 2</div>
      <div className="p-2 bd-highlight">Flex item 3</div>
    </div>
    <div className="d-flex flex-column-reverse bd-highlight">
      <div className="p-2 bd-highlight">Flex item 1</div>
      <div className="p-2 bd-highlight">Flex item 2</div>
      <div className="p-2 bd-highlight">Flex item 3</div>
    </div>
  </Container>
);

export default Detail;
