import axios from 'axios';

const getUsers = async (page) => {
  const data = await axios.get(`https://randomuser.me/api/?page=${page}&results=9`);
  return data.data.results
};

export default getUsers;
