interface IEntry {
  id: string;
  date: string;
  text: string;
  picture?: string | undefined | null;
}

interface IEntryBookStore {
  isLoading: boolean;
  entries: IEntry[];
  currentEntry: IEntry;
}

export { IEntry, IEntryBookStore };
