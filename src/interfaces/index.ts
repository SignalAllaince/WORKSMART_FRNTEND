export interface ITask {
  _id: string;
  title: string;
  approver: string;
  approver_name:string;
  due_date: Date | null;
  priority: string;
  description: string;
  progress: TaskProgress;
}

export interface ITaskRequest {
  _id: string;
  title: string;
  approver: string;
  approver_name:string;
  due_date: Date | null;
  priority: string;
  description: string;
  progress: TaskProgress;
  ownerName:string;
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
  IN_PROGRESS = "IN PROGRESS",
  COMPLETED = "COMPLETED",
  APPROVED = "APPROVED",
  PENDING_APPROVAL = "PENDING APPROVAL",
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