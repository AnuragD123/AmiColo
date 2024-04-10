export const handleSanitizeData = (data) => {
  // replace all the null values with not available
  for (let key in data) {
    if (data[key] === null) {
      data[key] = "Not Set";
    }
  }
  return data;
};
