export interface ITask {
  _id: string;
  title: string;
  approver: string;
  dueDate: Date | null;
  priority: string;
  description: string;
  progress: TaskProgress;
}

export interface IMember {
  name: string;
  email: string;
  role: string;
  numberOfTask: number;
  completion: number;
  lastUpdate: Date | null;
}


export enum TaskProgress {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  APPROVED = "APPROVED",
  NOT_STARTED="NOT_STARTED"
}
export interface IUser {
  first_name: string,
  last_name: string,
  email: string,
  id: string,
  isVerified: boolean,
  isAdmin: boolean,
  role: string,
}