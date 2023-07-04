export default function getStudentIdsSum(arrOfObj) {
  if (!Array.isArray(arrOfObj)) {
    return [];
  }

  return arrOfObj.reduce((ocu, obj) => ocu + obj.id, 0);
}
