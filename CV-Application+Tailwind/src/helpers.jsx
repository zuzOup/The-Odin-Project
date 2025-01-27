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

export function addArrayItemToObjectArray(object, value, key) {
  const obj = JSON.parse(JSON.stringify(object));
  const arr = [...obj[key], value];
  obj[key] = arr;
  return obj;
}

export function removeArrayItemToObjectArray(object, i, key) {
  const obj = JSON.parse(JSON.stringify(object));
  const arr = [...obj[key]];
  arr.splice(i, 1);
  obj[key] = arr;
  return obj;
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
