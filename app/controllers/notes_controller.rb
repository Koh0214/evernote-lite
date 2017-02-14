class NotesController < ApplicationController
  def index
    @notes = current_user.notes
  end

  def show
    @note = Note.find(params[:id]) #ここのidはnote_folderのid
    @note_folder = NoteFolder.find(@note.note_folder_id)
    @notes = Note.where(note_folder_id: @note.note_folder_id).order("updated_at DESC")
  end
end
