export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value, 'Guardrail was processed');
  } catch (error) {
    queue.push(error.message, 'Guardrail was processed');
  }
  return queue;
}
