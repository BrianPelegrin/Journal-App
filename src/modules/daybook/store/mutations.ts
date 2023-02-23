// export const storeMutations = () => {};
// export const setEntries = () => {};
// export const addEntries = () => {};

import { IEntry, IEntryBookStore } from "../interfaces";

export const setLoader = (state: IEntryBookStore, val: boolean) => {
  state.isLoading = val;
};

// export const updateEntries = () => {};
export const addToEntryList = (state: IEntryBookStore, val: IEntry) => {
  state.entries.push({ ...val });
};
export const setEntries = (state: IEntryBookStore, val: IEntry[]) => {
  state.entries = [...state.entries, ...val];
};

export const setCurrentEntry = (state: IEntryBookStore, val: any) => {
  const entriesList: Array<any> = state.entries;
  state.currentEntry = entriesList.find((x) => x.id == val);
};

export const UpdateEntry = (state: any, entry: IEntry) => {
  state.entries[
    state.entries.indexOf(
      state.entries.find((currentEntry: IEntry) => currentEntry.id == entry.id)
    )
  ] = { ...entry };
};

export const removeEntry = (state: any, val: string) => {
  const entriesList: Array<IEntry> = state.entries;
  const listToSet = entriesList.map((entry) => {
    if (entry.id != val) {
      return entry;
    }
  });

  console.log(listToSet);
  setTimeout(() => {
    state.entries = listToSet;
  }, 1000);
};
