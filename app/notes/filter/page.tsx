import {redirect} from "next/navigation";

function NoteFilter() {
  redirect("/notes/filter/all");
  return null;
}

export default NoteFilter;