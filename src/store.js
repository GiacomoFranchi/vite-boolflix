import { reactive } from "vue";

export const store = reactive({
  films: [],
  apiUrl: "",
  loading: false,
  selected: "",
});