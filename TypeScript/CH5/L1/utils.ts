export type Mail = {
from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;  
}