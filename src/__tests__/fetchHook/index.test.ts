// Libraries
import { renderHook } from "@testing-library/react";

// Types
import { PropsType } from "types/useFetchTypes";

// Hooks
import useFetch from "../../index";

// Constants
const params: PropsType = {
  url: "http://localhost:3001/users",
  method: "POST",
  payload: {
    username: "testuser",
    email: "testuser@testdomain.com",
    password: "testpassword",
  },
  executeImmediately: true,
};

test("Should render intial state", () => {
  const { result } = renderHook(useFetch, {
    initialProps: params,
  });
  expect(result.current.isLoading).toBe(true);
  expect(result.current.isError).toBe(false);
  expect(result.current.isSuccess).toBe(false);
});
