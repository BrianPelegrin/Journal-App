export const setCurrentEntry = (state: any, val: any) => {
  const entriesList: Array<any> = state.entries;
  const filteredEntry = entriesList.find((x) => x.id == val)[0];
  state.currentEntry = filteredEntry;
};
