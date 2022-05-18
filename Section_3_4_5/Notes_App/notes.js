import fs from "fs";
import chalk from "chalk";

export const getNotes = () => {
  return "Your notes...";
};

export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log(`Note title ${chalk.cyan(title)} already taken`);
  }
};

export const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (filteredNotes.length === notes.length) {
    console.log(`Note with title ${chalk.cyan(title)} does not exist`);
  } else {
    saveNotes(filteredNotes);
    console.log(`Note with title ${chalk.red(title)} removed`);
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const noteJSON = JSON.parse(notesBuffer.toString());
    return noteJSON;
  } catch (e) {
    return [];
  }
};
