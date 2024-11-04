import { Router, Request, Response } from "express";
import { Container } from "inversify";
import { BooksRepository } from "./BooksRepository";
import { myContainer } from "../container";

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
    const repo = myContainer.get<BooksRepository>(BooksRepository);
    try {
        const book = await repo.getBook(req.params.id);
        res.json(book);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get('/', async (req: Request, res: Response) => {
    const repo = myContainer.get<BooksRepository>(BooksRepository);
    try {
        const books = await repo.getBooks();
        res.json(books);
    } catch (e) { 
        res.status(500).json(e);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const repo = myContainer.get<BooksRepository>(BooksRepository);
    try {
        await repo.createBook(req.body);
        res.status(201).send();
    } catch (e) {
        res.status(500).json(e);
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const repo = myContainer.get<BooksRepository>(BooksRepository);
    try {
        const updateBook = await repo.updateBook(req.params.id, req.body);
        res.json(updateBook);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const repo = myContainer.get<BooksRepository>(BooksRepository);
    try {
    await repo.deleteBook(req.params.id);
    res.json(201).send();
    } catch (e) {
         res.status(500).json(e);
    }
});

export { router };
