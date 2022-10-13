import { Skeleton } from "@material-ui/lab";

const Loader = () => {
  return (
    <>
      <div
        style={{
          margin: "1rem",
          width: "75vw",
          textAlign: "center",
          overflow: "true",
        }}
      >
        <Skeleton width={'100%'} height={225} />
        <Skeleton width={'100%'} height={225} />
        <Skeleton width={'100%'} height={225} />
      </div>
    </>
  );
};

export default Loader;
