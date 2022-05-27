import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/";
export const clientApi = {
  getAll(link: string) {
    return axios.get(link);
  },
  getByName(name: string) {
    return axios.get(`${baseURL}pokemon/${name}`);
  },
};
