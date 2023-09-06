import { useState, useEffect } from "react";

// Libraries
import axios, { AxiosError, AxiosResponse } from "axios";

// Types
import { QueryResponseType, PropsType } from "types/useFetchTypes";

const useFetch = ({
  url,
  method,
  payload,
  executeImmediately = false,
}: PropsType): QueryResponseType => {
  const [queryResponse, setQueryResponse] = useState<QueryResponseType>({});

  const executeQuery = (): void => handleApiCall({ url, method, payload });

  const handleApiCall = ({ url, method, payload }: PropsType): void => {
    setQueryResponse({
      ...queryResponse,
      isLoading: true,
      isSuccess: false,
      isError: false,
    });
    axios({
      method,
      url,
      data: payload,
    })
      .then(
        (response: AxiosResponse): void => {
          setQueryResponse({
            ...queryResponse,
            data: response?.data,
            isSuccess: true,
            isLoading: false,
          });
        },
        (error: AxiosError): void => {
          setQueryResponse({
            ...queryResponse,
            error: error,
            isError: true,
            isLoading: false,
          });
        }
      )
      .finally((): void => {
        setQueryResponse({ ...queryResponse, isLoading: false });
      });
  };

  useEffect(() => {
    executeImmediately && handleApiCall({ url, method, payload });
  }, []);
  console.log({ ...queryResponse });

  return { ...queryResponse, executeQuery };
};

export default useFetch;
