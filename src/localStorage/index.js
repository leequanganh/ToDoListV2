export const dataJson = (data) => {
  return JSON.stringify(data);
};
export const saveLocal = (data) => {
  localStorage.setItem("data", data);
};
export const getLocal = () => {
  return JSON.parse(localStorage.getItem("data"));
};
