export interface ITask {
  title: string;
  approver: string;
  dueDate: Date | null;
  priority: string;
  project: string;
  account: string;
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
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
  PENDING_APPROVAL = "Pending Approval",
  APPROVED = "Approved",
  NOT_STARTED = "Not Started",
}