export const handleSelectOne = (event, id, selectedDataIds, setSelectedDataIds) => {
  const selectedIndex = selectedDataIds.indexOf(id);
  let newSelectedDataIds = [];

  if (selectedIndex === -1) {
    newSelectedDataIds = newSelectedDataIds.concat(selectedDataIds, id);
  } else if (selectedIndex === 0) {
    newSelectedDataIds = newSelectedDataIds.concat(selectedDataIds.slice(1));
  } else if (selectedIndex === selectedDataIds.length - 1) {
    newSelectedDataIds = newSelectedDataIds.concat(selectedDataIds.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelectedDataIds = newSelectedDataIds.concat(
      selectedDataIds.slice(0, selectedIndex),
      selectedDataIds.slice(selectedIndex + 1)
    );
  }

  setSelectedDataIds(newSelectedDataIds);
};
