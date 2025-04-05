export interface Session {
    id: string;
    teacherUsername: string;
    learnerUsername: string;
    skillName: string;
    dateTime: string;  // ISO format
    status: string;
    feedback: string;
  }
  