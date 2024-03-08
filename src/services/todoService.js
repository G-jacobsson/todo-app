import axios from 'axios';

// export const getApiKey = async () => {
//   const response = await axios.get(
//     'https://random-todos.azurewebsites.net/keys?email=geo.jacobsson%40gmail.com'
//   );
//   return response.data;
// };

export const getTodos = async () => {
  // const apiKey = await getApiKey();

  const response = await axios.get(
    'https://random-todos.azurewebsites.net/todos',
    {
      params: {
        apikey: await axios.get(
          'https://random-todos.azurewebsites.net/keys?email=geo.jacobsson%40gmail.com'
        ),
        amount: 6,
        randomdone: false,
      },
    }
  );
  console.log(response.data);
  return response.data;
};
