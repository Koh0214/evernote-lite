class NotesController < ApplicationController
  def index
  end

  def show
    @note = Note.find(params[:id])
    @note_folder = NoteFolder.find(@note.note_folder_id)
    @notes = Note.where(note_folder_id: @note.note_folder_id).order("updated_at DESC")
  end
end
