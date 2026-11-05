
//Rest Parameters
//ليخلي الفنك يستقبل اكبر عدد وبتكون اخر اشي 
// Rest Parameter يكون Array داخل Function.
//لازم تكون نوعه ارري

export function formatLabels(...labels: string[]): string {
  if (labels.length === 0) {
    return "No Labels";
  }
  if (labels.length === 1) {
    return `Label: ${labels[0]}`;
  }
  return `Labels: ${labels.join(", ")}`;
}