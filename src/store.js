import { reactive } from "vue";

export const store = reactive({
  films: [],
  serieTv:[],
  apiUrl: "https://api.themoviedb.org/3",
  loading: false,
  srcFilm: "",
});