# useFetch

## Overview

**useFetch** is a custom React hook designed to simplify the process of making HTTP requests in React applications. It abstracts away much of the boilerplate code associated with handling network requests, making it easier and more efficient to fetch data from remote APIs or services.

## Installation

Incorporating useFetch into your project is a straightforward process. You can effortlessly install it using npm:

```
npm i @mohammedelgammal/usefetch
```

## Usage

Leveraging useFetch to its full potential is as simple as importing the hook and harnessing its capabilities within your React components. The following step-by-step guide illustrates how to integrate it seamlessly:

Import the hook at the beginning of your functional component file:

```
import useFetch from "@mohammedelgammal/usefetch";
```

Inside your functional component, invoke useFetch while providing the necessary parameters:

```
function MyComponent() {
    const { isLoading, error, data, executeQuery, isSuccess, isError } = useFetch({
        url: 'https://api.example.com/data',
        method: 'GET', // or 'POST', 'PUT', etc.
        payload: { /* your request payload */ },
        executeImmediately: true, // Set to true for immediate execution upon component mounting
    });

    // Incorporate your component logic here...

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error: {error.message}</p>}
            {isSuccess && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}
```

## Parameters

**url (string, required)**: The URL pointing to the API endpoint that houses the data you intend to retrieve.

**method (string, required)**: The HTTP request method (e.g., 'GET', 'POST', 'PUT', etc.).

**payload (object, optional)**: An object representing the data to be included in the request, particularly relevant for 'POST' or 'PUT' requests.

**executeImmediately (boolean, optional)**: A boolean flag that, when set to true, triggers the API request immediately upon component mounting. The default is false.

### Response

**isLoading (boolean)**: This boolean value indicates whether the API request is currently in progress.

**isError (boolean)**: Indicates whether the API request encountered an error (true) or not (false).

**error (AxiosError)**: In the event of a request failure, this object contains detailed error information.

**isSuccess (boolean)**: Indicates whether the API request was successful (true) or not (false).

**data (AxiosResponse)**: Upon successful execution of the request, this object holds the response data.

**executeQuery (function)**: A function that you can invoke to manually initiate the API request, offering flexibility in executing queries.

## How useFetch Enhances Data Fetching

**Reduced Boilerplate**: useFetch significantly minimizes the boilerplate code associated with data fetching, resulting in cleaner and more maintainable components. It handles tasks such as loading state management, error handling, and data retrieval logic, allowing you to focus on the presentation of data.

**Effortless State Management**: This hook expertly manages the state of your API requests, including loading indicators, error interception, and the storage of data. By abstracting these complexities, it provides a seamless and elegant solution.

**Streamlined Execution**: useFetch offers the option to execute API requests immediately upon component mounting, facilitating straightforward use cases without additional code complexity.
Customization: While useFetch delivers a concise and efficient approach to data retrieval, it remains highly customizable. You can tailor each request by specifying parameters like the URL, HTTP method, and payload.

## Examples

The following examples illustrate how useFetch simplifies data fetching within your React components:

**// Example 1: Data fetching on component mount**

```
const { isLoading, error, data, isSuccess, isError } = useFetch({
    url: 'https://api.example.com/data',
    method: 'GET',
    executeImmediately: true,
});
```

**// Example 2: Manually triggering a query**

```
const { isLoading, error, data, executeQuery, isSuccess, isError } = useFetch({
    url: 'https://api.example.com/data',
    method: 'GET',
});
```

**// Example 3: Customizing the request with payload**

```
const { isLoading, error, data, executeQuery, isSuccess, isError } = useFetch({
    url: 'https://api.example.com/data',
    method: 'POST',
    payload: { key: 'value' },
});
```

### License

This package is released under the MIT License.
