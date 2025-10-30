import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    event.preventDefault(); //Prevents a page reload
    props.onAdd(note); // Sends the note to the App
    setNote({ title: "", content: "" }); // To clear the inputs
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form class="create-note">
        {isExpanded ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={true}>
          <Fab
            onClick={submitNote}
            sx={{
              backgroundColor: "#f5ba13",
              color: "white",
              position: "absolute",
              right: "18px",
              bottom: "-18px",
              width: "36px",
              height: "36px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
              "&:hover": { backgroundColor: "#ffca28" },
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
