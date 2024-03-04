import mongoose from "mongoose";

const book_structure = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Untitled",
    },
    subtitle: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "Unknown",
    },
    language: {
      type: String,
      default: "English",
    },
    edition: {
      type: Number,
    },
    publisher: {
      type: String,
      default: "None",
    },
    publication_year: {
      type: Number,
    },
    genre: {
      type: String,
      default: "Not specified",
    },
    tags: {
      type: String,
    },
  },
  {
    date_added: {
      type: Date,
      require: true,
    },
    view_count: {
      type: Number,
      default: 0,
    },
    purchase_count: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: -1,
    },
  }
);

const Book = mongoose.model("Book", book_structure);
