// Modules
import useFetch from "../../index";

// Libraries
import AxiosMock from "axios";
import { renderHook, cleanup } from "@testing-library/react";

// Types
import { PropsType } from "types/useFetchTypes";

afterEach(cleanup);

const params: PropsType = {
  url: "http://localhost:3001/users",
  method: "POST",
  payload: {
    username: "testuser",
    email: "testuser@testdomain.com",
    password: "testpassword",
  },
  executeImmediately: false,
};

test("Should return response object when successful", () => {
  (AxiosMock.post as jest.Mock).mockResolvedValue({
    data: "User created successfull",
  });
  (AxiosMock.post as jest.Mock).mockResolvedValue({
    data: "Unexpected error!",
  });

  const {
    result: { current },
  } = renderHook(useFetch, { initialProps: params });

  expect(current.isLoading).toBe(true);
  // expect(current.data).toBe({ messsage: "User created successfully!" });
});
