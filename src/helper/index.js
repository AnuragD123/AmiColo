export const handleSanitizeData = (data) => {
    for (let key in data) {
      if (data[key] === null && key !== "avatar") {
        data[key] = "Not Set";
      }
    }
  return data;
};
