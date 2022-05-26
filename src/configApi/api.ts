import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/";
export const clientApi = {
  getAll() {
    return axios.get(`${baseURL}pokemon?limit=20&offset=20`);
  },
  getByName(name: string) {
    return axios.get(`${baseURL}pokemon/${name}`);
  },
};
