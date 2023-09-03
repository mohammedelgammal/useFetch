// Libraries
import { renderHook } from "@testing-library/react";

// Types
import { PropsType } from "types/useFetchTypes";

// Hooks
import useFetch from "index";

// Constants
const params: PropsType = {
  url: import.meta.env.VITE_URL,
  method: "POST",
  payload: {
    username: "testuser",
    email: "testuser@testdomain.com",
    password: "testpassword",
  },
};

test("Should render intial state", () => {
  const {} = renderHook(useFetch, {
    initialProps: params,
  });
});
