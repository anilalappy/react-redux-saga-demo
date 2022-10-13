import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dashboard from "../pages/Dashboard";

Enzyme.configure({ adapter: new Adapter() });

describe("validate dashboard rendering", () => {
  it("verify dashboard container", () => {
    // arrange
    const wrapper = shallow(<Dashboard />);
    const expectedLength = 1;

    // act
    /* const dashboardWrapper = wrapper.find({
      "data-testid": "dashboard-container",
    }); */
    const dashboardWrapper = wrapper.find({
      "data-testid": "dashboard-container",
    });

    // assert
    expect(dashboardWrapper).toHaveLength(expectedLength);
  });
  it("verify dashboard title", () => {
    // arrange
    const wrapper = shallow(<Dashboard />);
    const expectedLength = 1;
    const expectedTitle = "Dashboard";
    // act
    const titleWrapper = wrapper.find({
      "data-testid": "dashboard-title",
    });
    // assert
    expect(titleWrapper).toHaveLength(expectedLength);
    expect(titleWrapper.text()).toEqual(expectedTitle);
  });
});
