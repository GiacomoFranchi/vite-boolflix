import { reactive } from "vue";

export const store = reactive({
  films: [],
  apiUrl: "https://api.themoviedb.org/3",
  loading: false,
  srcFilm: "",
});