export default function cleanSet(set, startString) {
  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      const suffix = value.substring(startString.length);
      result += `${suffix}-`;
    }
  }

  // Remove the trailing '-' character if the result is not empty
  if (result.length > 0) {
    result = result.slice(0, -1);
  }

  return result;
}
