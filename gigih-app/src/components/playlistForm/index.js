import React from "react";

function PlaylistForm({ titleValue, descValue, handleSubmit, onChange }) {
  return (
    <div className="PlaylistForm">
      <form onSubmit={handleSubmit}>
        <input
          className="InputForm"
          type="text"
          placeholder="Playlist Title"
          value={titleValue}
          onChange={onChange}
          name="titlePlaylist"
          minLength="10"
        />
        <input
          className="InputForm"
          type="text"
          placeholder="Playlist Description"
          value={descValue}
          onChange={onChange}
          name="descPlaylist"
          minLength="20"
        />
        <button className="CreateButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default PlaylistForm;
