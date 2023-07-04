export default function getListStudentIds(arrOfObj) {
  if (!Array.isArray(arrOfObj)) {
    return [];
  }

  return arrOfObj.map((obj) => obj.id);
}
