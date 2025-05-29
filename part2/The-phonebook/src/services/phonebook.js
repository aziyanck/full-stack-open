import axios from "axios";
const baseUrl = "https://phonebook-g0r3.onrender.com/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

export default { getAll, create };
