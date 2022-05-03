import { AxiosRequestConfig } from 'axios';

import Axios from './configuration';

const makeRequest = async <T>(request: AxiosRequestConfig) => {
  try {
    const response = await Axios.request<T>(request);
    return response.data;
  } catch (error) {
    throw new Error(
      `Error in 'axiosGetJsonData(${request.url})': ${error.message}`
    );
  }
};

export default makeRequest;
