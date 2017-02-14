class NotesController < ApplicationController
  def index
  end

  def show
    @note = Note.find(params[:id])
    @notes = Note.where(note_folder_id: @note.note_folder_id)
  end
end
