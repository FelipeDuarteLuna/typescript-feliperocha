class Person{
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string{
        return this.name;
    }

}

interface Iperson{
    id: number;
    name: string;
    age: number;
    sayMyName(): string;
}

class Person2 implements Iperson{
    readonly id: number;
    public name: string;//protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string{
        return this.name;
    }
}

class Employee extends Person{
    salary: number;

    constructor(id: number, name: string, age: number, salary: number){
        super(id, name, age);
        this.salary = salary;
    }
}