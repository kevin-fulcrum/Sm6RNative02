import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.0.2.2:3000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

const parseBody = async (res) => {
  if (res.status) {
    try {
      if (res.status === 200 || res.status === 201) {
        return res.data;
      } else {
        return parseError(res, res.status);
      }
    } catch (e) {
      return parseError(res, res.status);
    }
  }

  return parseError(res, res.status);
};

const parseError = async (error, status) => {
  switch (status) {
    case undefined:
      return error
        .text()
        .then((result) => {
          return {
            errors: 'Something went wrong!',
            status: error.data.status,
          };
        })
        .catch((errors) => {
          if (error.data.status === 1000) {
            return {
              errors: 'Network Failed',
              status: 1000,
            };
          }
        });
    case 400:
      return {
        errors: 'operation failed',
        status,
      };
    case 401:
      return {
        errors: 'Something went wrong!, retry again',
        status,
      };
    case 403:
      return {
        errors: 'please, log in again',
        status,
      };
    case 404:
      return {
        errors: 'Something went wrong!, please try in 30 mins',
        status,
      };
    case 500:
      return {
        errors: 'Something went wrong!, server down',
        status,
      };
    case 503:
      return {
        errors: 'Sorry, please try in 30 mins',
        status,
      };
    default:
      return {
        errors: 'Something went wrong!, please try again',
        status,
      };
  }
};

const fetchApi = {
  get: async (url, config) => {
    return instance
      .get(url, config)
      .then((result) => {
        return parseBody(result);
      })
      .catch((error) => {
        console.warn('catch api fetch error', error);
        try {
          if (error.response.status === 1000) {
            return {
              errors: 'Network Failed',
              status: 1000,
            };
          }
          return parseError(error.response, error.response.status);
        } catch (e) {
          console.warn('catch api fetch get error', e);
          return parseError(e.response, e.response.status);
        }
      });
  },
  post: async (url, parameters, config) => {
    return instance
      .post(url, parameters, config)
      .then((result) => {
        return parseBody(result);
      })
      .catch((error) => {
        console.warn('catch api fetch post  error', error);
        try {
          if (error.response.status === 1000) {
            return {
              errors: 'Network Failed',
              status: 1000,
            };
          }
          return parseError(error.response, error.response.status);
        } catch (e) {
          console.warn('catch api fetch post error', e);
          return parseError(e.response, e.response.status);
        }
      });
  },
  put: async (url, parameters, config) => {
    return instance
      .put(url, parameters, config)
      .then((result) => {
        return parseBody(result);
      })
      .catch((error) => {
        try {
          if (error.response.status === 1000) {
            return {
              errors: 'Network Failed',
              status: 1000,
            };
          }
          return parseError(error.response, error.response.status);
        } catch (e) {
          return parseError(e.response, e.response.status);
        }
      });
  },
  patch: async (url, parameters, config) => {
    return instance
      .patch(url, parameters, config)
      .then((result) => {
        return parseBody(result);
      })
      .catch((error) => {
        try {
          if (error.response.status === 1000) {
            return {
              errors: 'Network Failed',
              status: 1000,
            };
          }
          return parseError(error.response, error.response.status);
        } catch (e) {
          return parseError(e.response, e.response.status);
        }
      });
  },
};

export default fetchApi;
