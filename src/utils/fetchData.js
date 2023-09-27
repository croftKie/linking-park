import axios from "axios";

export const fetchAllLinkData = async (id) => {
  const { data } = await axios.get(
    `https://linkingpark-api.kierancroft.com/links/${id}`
  );
  return data;
};

export const addNewLink = async (obj) => {
  const { data } = await axios.post(
    `https://linkingpark-api.kierancroft.com/links`,
    {
      id: obj.id,
      link: obj.url,
      point: obj.point,
    }
  );
  return data;
};

export const addNewUser = async (obj) => {
  const { data } = await axios.post(
    `https://linkingpark-api.kierancroft.com/user`,
    {
      username: obj.username,
      password: obj.password,
    }
  );
  return data;
};

export const loginUser = async (obj) => {
  const { data } = await axios.post(
    `https://linkingpark-api.kierancroft.com/login`,
    {
      username: obj.username,
      password: obj.password,
    }
  );
  return data;
};
