
export interface Todo {
    _id?: string;
    title: string;
    isCompleted: boolean;
    updatedAt: Date
  }

export interface User {
    id:string;
    firstname:string;
    lastName:string;
    list: Todo
}