import Users from "../pages/Users/UsersComponent";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const mockStore = configureStore([]);

const initialState = {
  users: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        city: "Gwenborough",
        zipcode: "92998-3874",
      },
    },
  ],
  loading: false,
  error: null,
};

// for snapshot testing we used renderer method
describe("verify user container with snap shot", () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore({ users: initialState });
    store.dispatch = jest.fn();
    wrapper = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Users />
        </Provider>
      </BrowserRouter>
    );
  });
  it("user component snapshot verification", () => {
    // arrange
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

});
describe("verify user container", () => {
  let store: any;
  beforeEach(() => {
    store = mockStore({ users: initialState });
    store.dispatch = jest.fn();
  });
  it("render user component without error", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Users />
        </Provider>
      </BrowserRouter>
    );
    expect(getByTestId("user-container")).toBeInTheDocument();
    expect(getByTestId("add-user-link")).toBeInTheDocument();
  });
});
