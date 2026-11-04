//Value Unions


export type Priority = "low" | "medium" | "high" | "critical";

export function setPriority(priority: Priority): number {
  switch (priority) {
    case "low":
      return 0;
    case "medium":
      return 1;
    case "high":
      return 2;
    case "critical":
      return 3;
    default:
      return 0;
  }
}