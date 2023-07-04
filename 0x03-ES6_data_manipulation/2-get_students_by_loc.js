export default function getStudentsByLocation(arrOfObj, city) {
  if (!Array.isArray(arrOfObj) || !city) {
    console.log("There's/re Missing Arguments.");
    return [];
  }

  return arrOfObj.filter((obj) => obj.location === city);
}
