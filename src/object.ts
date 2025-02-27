// Type
type Order = {
    productID: string;
    price: number;  
}

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[];
}

const user: User = {
    firstName: 'Felipe',
    age: 25,
    email: 'felipinho.luna@gmail.comm',
    orders: [{productID: "9001", price: 100}]
}  

// Unions
type Author = {
    books: string[];  
}

const author : Author & User = {
    firstName: 'Felipe',
    age: 25,
    email: 'felipinho.luna@gmail.comm',
    password:"123456",
    orders: [{productID: "9001", price: 100}],
    books: ["Aprendendo Typescript"]
}              

// Interfaces

interface UserInterface {
    readonly firstName: string;
    email: string;
}

const emailUser: UserInterface = {
    firstName: 'Felipe',
    email: 'felipinho.luna@gmail.com',
}

interface AuthorInterface {
    books: string[];
}

const newAuthor: AuthorInterface & UserInterface = {
    firstName: 'Felipe',
    email: 'felipinho.@gmail.com',
    books: ["Aprendendo Typescript"]
}