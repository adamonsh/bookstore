import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("MERN Stack bookstore");
});

app.post("/books", async (request, response) => {
  try {
    if (!request.body.added_by) {
      return response.status(400).send({
        message: "<NULL> is not a valid value for 'added_by'",
      });
    }
    const testBook = {
      title: request.body.title,
      subtitle: request.body.subtitle,
      author: request.body.author,
      language: request.body.language,
      publication_date: request.body.publication_date,
      edition: request.body.edition,
      publisher: request.body.publisher,
      publication_date: request.body.publication_date,
      genre: request.body.tags,
      date_added: request.body.date_added,
      view_count: request.body.view_count,
      purchase_count: request.body.purchase_count,
      rating: request.body.rating,
      added_by: request.body.added_by,
    };

    const book = await Book.create(testBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
