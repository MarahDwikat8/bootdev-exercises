import { z } from "zod";

const JelloIssueSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  status: z.string(),
});

export type JelloIssue = z.infor<typeof JelloIssueSchema>

export async function fetchJelloIssue(): Promise<JelloIssue[]> {
  const res = await fetch("https://api.boot.dev/v1/courses_rest_api/learn-http/projects");
  const data = await res.json();

  // ?
  if (!(data instanceof Array)) {
    throw new Error('Data Not Array')
  }
  return data
}
