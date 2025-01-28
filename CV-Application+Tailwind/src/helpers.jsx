export function addValueToObject(object, e, key) {
  const value = typeof e === "string" ? e : e.target.value;

  const obj = JSON.parse(JSON.stringify(object));
  obj[key] = value;
  return obj;
}

export function addObjectToObject(object, value, key) {
  const obj = JSON.parse(JSON.stringify(object));
  obj[key] = value;
  return obj;
}

export function addArrayToObject(object, value, key) {
  const obj = JSON.parse(JSON.stringify(object));
  if (obj[key] && obj[key].length > 0) {
    const arr = [...obj[key], ...value];
    obj[key] = arr;
  } else {
    obj[key] = value;
  }
  return obj;
}

export function addArrayItemToObjectArray(object, value, key) {
  const obj = JSON.parse(JSON.stringify(object));
  const arr = [...obj[key], value];
  obj[key] = arr;
  return obj;
}

export function addItemToArray(array, value) {
  const arr = [...array, value];
  return arr;
}

export function removeArrayItemToObjectArray(object, i, key) {
  const obj = JSON.parse(JSON.stringify(object));
  const arr = [...obj[key]];
  arr.splice(i, 1);
  obj[key] = arr;
  return obj;
}

export function removeItemFromArray(array, i) {
  const arr = [...array];
  arr.splice(i, 1);
  return arr;
}

export function deleteKeyFromObject(object, key) {
  const obj = JSON.parse(JSON.stringify(object));
  delete obj[key];
  return obj;
}

export function yyyy_mmToyy(yyyy_mm) {
  if (yyyy_mm && yyyy_mm.includes("-")) return yyyy_mm.split("-")[0].slice(-2);
  return yyyy_mm;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// TODO: fix dates?????????

export function yyyy_mmToMMMyyyy(yyyy_mm) {
  if (yyyy_mm && yyyy_mm.includes("-")) {
    const date = new Date(yyyy_mm);
    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  }
  return yyyy_mm;
}

export function yyyy_mmToMMMMM_yyyy(yyyy_mm) {
  if (yyyy_mm && yyyy_mm.includes("-")) {
    const date = new Date(yyyy_mm);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1) % 12;

    return months[month] + " " + year;
  }
  return yyyy_mm;
}

export function formatTel(string) {
  if (!string || string.length !== 10) return string;
  const formatted = `(${string.slice(0, 3)})-${string.slice(3, 6)}-${string.slice(6)}`;
  return formatted;
}
