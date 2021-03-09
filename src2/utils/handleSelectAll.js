export const handleSelectAll = (event, data, setSelectedDataIds) => {
  let newSelectedDataIds;

  if (event.target.checked) {
    newSelectedDataIds = data.map((d) => d.id);
  } else {
    newSelectedDataIds = [];
  }

  setSelectedDataIds(newSelectedDataIds);
};
