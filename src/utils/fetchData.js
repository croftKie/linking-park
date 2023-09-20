import axios from "axios";

export const fetchAllLinkData = async (id) => {
  const { data } = await axios.get(
    `https://linkingpark-api.kierancroft.com/links/${id}`
  );
  console.log(data);
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
