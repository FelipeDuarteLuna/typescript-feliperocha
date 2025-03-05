"use strict";
const user = {
    firstName: 'Felipe',
    age: 25,
    email: 'felipinho.luna@gmail.comm',
    orders: [{ productID: "9001", price: 100 }],
    register() {
        return "a";
    },
};
const author = {
    firstName: 'Felipe',
    age: 25,
    email: 'felipinho.luna@gmail.comm',
    password: "123456",
    orders: [{ productID: "9001", price: 100 }],
    books: ["Aprendendo Typescript"],
    register() {
        return "a";
    },
};
const emailUser = {
    firstName: 'Felipe',
    email: 'felipinho.luna@gmail.com',
};
const newAuthor = {
    firstName: 'Felipe',
    email: 'felipinho.@gmail.com',
    books: ["Aprendendo Typescript"]
};
