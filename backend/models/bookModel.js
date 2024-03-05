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
      default: "Ingles",
    },
    edition: {
      type: Number,
    },
    publisher: {
      type: String,
      default: "None",
    },
    publication_date: {
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
  },
  {
    added_by: {
      type: String,
      require: true,
    },
  }
);

export const Book = mongoose.model("Book", book_structure);
