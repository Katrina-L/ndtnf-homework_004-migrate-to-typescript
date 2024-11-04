import 'reflect-metadata';
import { Container } from "inversify";
import { BooksRepository, MongoBooksRepository } from "./books/BooksRepository";

const myContainer = new Container();

myContainer.bind<BooksRepository>(BooksRepository).to(MongoBooksRepository);

export { myContainer };