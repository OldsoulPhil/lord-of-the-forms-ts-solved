export const capitalize = (name: string) => {
  // todo: build this function
  // `capitalize("jOn")` should output `"Jon"`
  const newName = name.slice(1, name.length);
  const firstLetter = name.slice(0, 1);
  const capitalizeFirstLetter = firstLetter.toUpperCase();
  const keepLower = newName.toLowerCase();

  return capitalizeFirstLetter + keepLower;
};

export const formatPhoneNumber = (phoneNumber: string[]) => {
  // todo: build this function
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
  return phoneNumber.join("-");
};
export const preventKeyingNumbers = (value: string) => {
  return value.replace(/\d/, "");
};
