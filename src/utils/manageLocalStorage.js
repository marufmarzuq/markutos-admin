import { decryptData, encryptData } from "./shield";

export const loadFromLocalStorage = () => {
  if (localStorage.getItem("markutos")) {
    return JSON.parse(decryptData(localStorage.getItem("markutos")));
  } else return undefined;
};

export const saveToLocalStorage = (key, data) => {
  const prevData = loadFromLocalStorage();
  const finalData = prevData ? { ...prevData, [key]: data } : { [key]: data };
  const state = encryptData(JSON.stringify(finalData));
  localStorage.setItem("markutos", state);
  const updatedData = loadFromLocalStorage();
  console.log(updatedData);
};
