interface Monarchy {
  birth(child: string, parent: string): void;
  death(name: string): void;
  getOrderOfSuccession(): string[];
}

class Person {
  children: Person[];
  private _isAlive: boolean;

  constructor(public name: string) {
    this.children = [];
    this.isAlive = true;
  }

  get isAlive() {
    return this._isAlive;
  }

  set isAlive(val: boolean) {
    this._isAlive = val;
  }
}

class Monarchy implements Monarchy {
  private adjacencyList: Map<string, Person> = new Map();
  private succession: string[] = [];

  constructor(private monarch: Person) {
    this.adjacencyList.set(this.monarch.name, monarch);
  }

  birth(childName: string, parentName: string): void {
    const child = new Person(childName);
    const parent = this.adjacencyList.get(parentName);
    parent.children.push(child);
    this.adjacencyList.set(childName, child);
  }

  death(name: string): void {
    if (this.adjacencyList.has(name)) {
      this.adjacencyList.get(name).isAlive = false;
    }
  }

  getOrderOfSuccession(): string[] {
    const visited: Map<string, boolean> = new Map();
    this.succession = [];
    return this.traverseTree(this.monarch, this.succession, visited);
  }

  private traverseTree(
    parent: Person,
    succession: string[],
    visited: Map<string, boolean>
  ): string[] {
    const children = parent.children;
    parent.isAlive && succession.push(parent.name);
    visited.set(parent.name, true);

    for (const child of children) {
      if (!visited.get(child.name)) {
        this.traverseTree(child, succession, visited);
      }
    }

    return succession;
  }
}

const monarchy = new Monarchy(new Person("Jake"));
monarchy.birth("Catherine", "Jake");
monarchy.birth("Tom", "Jake");
monarchy.birth("Celine", "Jake");

monarchy.birth("Jane", "Catherine");
monarchy.birth("Mark", "Catherine");

monarchy.birth("Farah", "Jane");

monarchy.birth("Peter", "Celine");
console.log(monarchy);
