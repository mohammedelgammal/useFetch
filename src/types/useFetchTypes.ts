// Libraries
import { AxiosError, AxiosResponse } from "axios";

interface PropsType {
  url: string;
  method: string;
  payload?: object;
  executeImmediately?: boolean;
}

interface QueryResponseType {
  isLoading?: boolean;
  isError?: boolean;
  error?: AxiosError;
  isSuccess?: boolean;
  data?: AxiosResponse;
  executeQuery?: () => void;
}

export type { QueryResponseType, PropsType };
