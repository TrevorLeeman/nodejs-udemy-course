import fs from "fs";
import chalk from "chalk";

export const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bold.yellowBright("YOUR NOTES"));
  notes.forEach((note) => console.log(chalk.blue(note.title)));
};

export const readNote = (title) => {
  const notes = loadNotes();
  const note = findNote(notes, title);
  if (note) {
    console.log(chalk.blue(note.title));
    console.log(note.body);
  } else {
    console.log(`Note with title ${chalk.red(title)} not found`);
  }
};

export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = findNote(notes, title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New note added"));
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

const findNote = (notes, title) => notes.find((note) => note.title === title);
