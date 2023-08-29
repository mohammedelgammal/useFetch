// Libraries
import { AxiosError, AxiosResponse } from "axios";

interface Props {
  url: string;
  method: string;
  payload?: object;
  executeImmediately?: boolean;
}

interface QueryResponse {
  isLoading?: boolean;
  error?: AxiosError;
  data?: AxiosResponse;
  executeQuery: () => void;
}

export type { QueryResponse, Props };
