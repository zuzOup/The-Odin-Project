class Node {
  constructor(value, nextNode) {
    this.value = value || null;
    this.nextNode = nextNode || null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const node = new Node(value);

    if (this.headNode === null) {
      this.headNode = node;
    } else {
      let tailNode = this.headNode;

      while (tailNode.nextNode !== null) {
        tailNode = tailNode.nextNode;
      }

      tailNode.nextNode = node;
    }
  }

  prepend(value) {
    const tail = this.headNode;
    this.headNode = new Node(value, tail);
  }

  size() {
    let current = this.headNode;
    let counter = 0;

    while (current) {
      counter++;
      current = current.nextNode;
    }
    return counter;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let current = this.headNode;

    if (current === null) return null;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    if (index >= this.size() || index < 0) return "invalid number";
    let current = this.headNode;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    return current;
  }

  pop() {
    if (this.size() <= 1) {
      return new LinkedList();
    }

    let current = this.headNode;

    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    const value = current.nextNode.value;
    current.nextNode = null;

    return value;
  }

  contains(value) {
    let current = this.headNode;
    let contains = false;

    while (contains === false && current !== null) {
      if (current.value === value) contains = true;

      current = current.nextNode;
    }
    return contains;
  }

  find(value) {
    if (!this.contains(value)) return null;

    let current = this.headNode;
    let counter = -1;
    let contains = false;

    while (contains === false && current !== null) {
      if (current.value === value) contains = true;
      counter++;
      current = current.nextNode;
    }
    return counter;
  }

  toString() {
    let string = "";
    let current = this.headNode;

    while (current) {
      string = string + `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return string + `null`;
  }
}

function test() {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("parrot");
  list.append("hamster");
  list.append("snake");
  list.append("turtle");

  console.log(list.toString());
  // should print ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
}

test();
