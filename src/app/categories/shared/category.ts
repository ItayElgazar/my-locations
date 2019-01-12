export class Category {
  id: number;
  constructor(public name: string) {
    this.id = new Date().getTime();
  }

}
