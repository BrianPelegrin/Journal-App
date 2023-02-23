import { IEntryBookStore } from "../interfaces";

export default (): IEntryBookStore => ({
  isLoading: false,
  entries: [],
  currentEntry: {
    id: "",
    text: "",
    date: "",
    picture: undefined,
  },
});
