// temporarily assign id's until such time we connect a database
// let idCounter = 11;
export class Task {
  pk: number;
  title: string;
  description: string;
  assigned?: string[];
  completed: boolean;

  constructor() {
    // initialze completed value to false
    this.completed = false;
    // this.id = idCounter.toString();
    // idCounter++;
  }
}
