import fetchApi from './fetchApi';

const orderApi = {
  createOrder: async (parameters) => {
    const token = 'fe7e6602162f788913e79b11a7db7b51';
    const config = {
      Authorization: `Bearer ${token}`,
    };
    const data = await fetchApi.post('/orders', parameters, config);
    return data;
  },
  getOrders: async () => {
    const token = 'fe7e6602162f788913e79b11a7db7b51';
    const config = {
      Authorization: `Bearer ${token}`,
    };
    const data = await fetchApi.get('/orders', config);
    return data;
  },
};

export default orderApi;
