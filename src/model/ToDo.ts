export default class ToDo {
  id: string;
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.id = (Math.random() * 10000).toLocaleString();
    this.title = title;
    this.description = description;
  }
}
