import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://api.monitorfly.team.xdomainhost.com",
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
