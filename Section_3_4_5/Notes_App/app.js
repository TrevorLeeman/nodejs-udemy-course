import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import { getNotes, addNote, removeNote } from "./notes.js";

// console.log(getNotes());
// console.log(chalk.redBright.bold.inverse("Fail!!!"));
// const command = process.argv[2];

// if (command === "add") console.log("Adding Note!");
// else if (command === "remove") console.log("Removing Note!");

// Customize yargs version
const yarg = yargs(hideBin(process.argv));
yarg
  .version("1.1.0")
  .command({
    command: "add",
    describe: "Add a new note",
    builder: {
      title: {
        describe: "Note title to add",
        demandOption: true,
        string: true,
      },
      body: {
        describe: "Note contents",
        demandOption: true,
        string: true,
      },
    },
    handler: (argv) => {
      addNote(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "Remove a note",
    builder: {
      title: {
        describe: "Note title to be deleted",
        demandOption: true,
        string: true,
      },
    },
    handler: (argv) => {
      removeNote(argv.title);
    },
  })
  .command({
    command: "list",
    describe: "List all notes",
    handler: () => {
      console.log("List of notes");
    },
  })
  .command({
    command: "read",
    describe: "Read a single note",
    handler: () => {
      console.log("Reading your note");
    },
  })
  .parse();
// console.log(process.argv);
// console.log(y.argv);
