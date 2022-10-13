import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Prompt, useHistory, useParams } from "react-router";
import { Container, UserForm } from "../components/common/Container";
import { addUser,  updateUser } from "../redux/actions/users";
import parse from "html-react-parser";
import { User } from "../redux/types";

function AddEdit() {
  const { id: userId }: any = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const users: User[] = useSelector((state: any) => state.users.users);
  const userDetail: any = useSelector((state: any) =>
    userId ? state.users.userDetail : {}
  );

  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<{
    id: number | string;
    name: string;
    username: string;
    email: string;
    city: string;
    zipcode: string;
  }>({
    defaultValues: userDetail,
  });
  if (userDetail && userId) {
    setValue("id", userDetail.id);
    setValue("name", userDetail.name);
    setValue("username", userDetail.username);
    setValue("email", userDetail.email);
    setValue("city", userDetail.address.city);
    setValue("zipcode", userDetail.address.zipcode);
  }
  const onSubmit = handleSubmit((param) => {
    if (param && param.id) dispatch(updateUser(param));
    else dispatch(addUser(param, users));

  });

  /* const handleUpdateUser = (key: any, value: any) => {
    setValue(key, value);
  }; */
  return (
    <Container>
      <UserForm>
        <form data-testid="user-add-edit-form" onSubmit={onSubmit}>
          <h1>{userDetail && userDetail.id ? "Update User" : "Add User"} </h1>
          <label>Name*</label>
          <input
            type="hidden"
            {...register("id")}
            // onChange={(e) => handleUpdateUser("name", e.target.value)}
          />
          <input data-testid="user-name" {...register("name")} />
          {errors?.name && (
            <p style={{ color: "red" }}>{errors.name.message}</p>
          )}
          <label>Username*</label>
          <input data-testid="user-username" {...register("username")} />
          {errors?.username && (
            <p style={{ color: "red" }}>{errors.username.message}</p>
          )}
          <label>Email*</label>
          <input data-testid="user-email" type="text" {...register("email")} />
          {errors?.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
          <label>City</label>
          <input data-testid="user-city" {...register("city")} />
          <label>Zipcode</label>
          <input data-testid="user-zipcode" {...register("zipcode")} />
          <input
            data-testid="user-submit"
            className="submitButton"
            type="submit"
          />
        </form>
      </UserForm>
    </Container>
  );
}

export default AddEdit;
