import { IEntry, IEntryBookStore } from "../interfaces";

// export const getAllEntries = (state: any) => {};
export const getCurrentEntry = (state: IEntryBookStore) => {
  return state.currentEntry;
};
export const getEntryByTerm = (state: IEntryBookStore) => (term: string) => {
  if (term.length == 0) return state.entries;

  return state.entries.filter((x: IEntry) =>
    x.text.toLowerCase().includes(term.toLowerCase())
  );
};

export const isLoading = (state: IEntryBookStore) => {
  return state.isLoading;
};

export const getEntryById = (state: IEntryBookStore) => (id: string) => {
  if (id != undefined || id != 0 || id != "") {
    const EntryArray: Array<IEntry> = [...state.entries];
    return { ...EntryArray.find((entry) => entry.id == id) };
  } else {
    return;
  }
};
