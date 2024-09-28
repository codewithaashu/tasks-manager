export const getColorOnStage = (stage) => {
  if (stage === "todo") {
    return "bg-blue-600";
  } else if (stage === "completed") {
    return "bg-green-600";
  } else if (stage === "in_progress") {
    return "bg-yellow-600";
  }
};
