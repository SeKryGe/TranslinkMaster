
export interface Todo {
    _id?: string;
    title: string;
    isCompleted: boolean;
    updatedAt: Date
  }

export interface User {
    _id?:string;
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    todo?: Todo
}