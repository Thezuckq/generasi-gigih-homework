import { Button, Div } from "atomize";
import React from "react";
import "./index.css";

function PlaylistForm({ titleValue, descValue, handleSubmit, onChange }) {
  return (
    <div className="PlaylistForm">
      <form onSubmit={handleSubmit}>
        <input
          className="InputFormTitle"
          type="text"
          placeholder="Playlist Title"
          value={titleValue}
          onChange={onChange}
          name="titlePlaylist"
          minLength="10"
        />
        <input
          className="InputFormDesc"
          type="text"
          placeholder="Playlist Description"
          value={descValue}
          onChange={onChange}
          name="descPlaylist"
          minLength="20"
        />
        <Div d="flex" justify="center" >
        <Button
        className="wrapButton" 
        type="submit">
          Create
        </Button>
        </Div>
      </form>
    </div>
  );
}

export default PlaylistForm;
