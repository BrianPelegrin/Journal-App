import entriesApi from "../helpers/entriesApi";
import { IEntry } from "../interfaces";

export const loadEntries = async ({ commit }: any) => {
  const { data } = await entriesApi.get("/entries.json");
  const entries = [];
  for (const id of Object.keys(data)) {
    entries.push({ id, ...data[id] });
  }
  commit("setEntries", entries);
};

export const updateEntries = async ({ commit }: any, entry: IEntry) => {
  const { id, text, date } = entry;
  const { data } = await entriesApi.put(`/entries/${id}.json`, { text, date });
  commit("UpdateEntry", { id, ...data });
  return id;
};

export const addEntry = async ({ commit }: any, entry: IEntry) => {
  const { text, date } = entry;
  const entryToPost = { text, date };
  const resp = await entriesApi.post(`/entries.json`, entryToPost);

  if (resp.status == 200 && resp.statusText == "OK") {
    const newEntry = { id: resp.data.name, ...entryToPost };
    commit("addToEntryList", newEntry);
    return newEntry.id;
  } else {
    console.warn("Ocurrio un error en la Insercion");
  }
};
// export const deleteEntries = async ({ commit }: any) => {};
