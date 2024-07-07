import { FC } from "react";
import { Note } from "./Note";

type Props = {
  notes: Note[];
  selectNoteId: number | null;
  onSelect: (note: Note) => void;
};

export const NoteList: FC<Props> = ({ notes, selectNoteId, onSelect }) => {
  return (
    <ul className="space-y-2">
      {notes.map(note => (
        <li
          key={note.id}
          className={`cursor-pointer p-2 rounded flex justify-between ${selectNoteId === note.id ? "bg-blue-200" : "bg-white"}`}
          onClick={() => onSelect(note)}
        >
          <span>{note.title}</span>
        </li>
      ))}
    </ul>
  );
};
