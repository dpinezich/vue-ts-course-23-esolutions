class ZooKeeper {
    nametag: string = "Mikle";
}

class Animal {
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

console.log(createInstance(Lion).keeper.nametag);
