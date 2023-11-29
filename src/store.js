import { reactive } from "vue";

export const store = reactive({
  films: [],
  apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=3feda43c221b120c99ea38148719ef84",
  loading: false,
  srcFilm: "",
});