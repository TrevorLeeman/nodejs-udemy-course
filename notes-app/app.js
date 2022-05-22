import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { listNotes, addNote, removeNote, readNote } from "./notes.js";

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
    handler: (argv) => addNote(argv.title, argv.body),
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
    handler: (argv) => removeNote(argv.title),
  })
  .command({
    command: "list",
    describe: "List all note titles",
    handler: () => listNotes(),
  })
  .command({
    command: "read",
    describe: "Read a single note",
    builder: {
      title: {
        describe: "Note title to be read",
        demanOption: true,
        string: true,
      },
    },
    handler: (argv) => readNote(argv.title),
  })
  .parse();

// console.log(process.argv);
// console.log(y.argv);
