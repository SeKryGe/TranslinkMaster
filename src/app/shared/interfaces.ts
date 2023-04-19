export interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
    date: Date;
  }

export interface User {
    id:number;
    firstname:string;
    lastName:string;
    list: Todo
}