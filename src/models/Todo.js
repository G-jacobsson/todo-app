import { PRIORITY_LOW } from '../utils/constants';
export class Todo {
  id;
  task;
  done;
  priority;

  constructor(id, task, done, priority = PRIORITY_LOW) {
    this.id = id;
    this.task = task;
    this.done = done;
    this.priority = priority;
  }
}
