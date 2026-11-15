interface JelloIssue {
  id: string;
  title: string;
}

export function validateIssue(data: any): JelloIssue {
 if (!data || typeof data !== "object") {
    throw new Error("Invalid data");
  }
  if (typeof data.id !== "string") {
    throw new Error("Invalid id");
  }
  if (typeof data.title !== "string") {
    throw new Error("Invalid title");
  }
  
  return data;}
