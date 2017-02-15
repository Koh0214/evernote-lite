class NotesController < ApplicationController
  def index
    @note = current_user.notes.last
    @notes = current_user.notes.order("updated_at DESC")
  end

  def show
    @note = Note.find(params[:id]) #ここのidはnoteのid
    @note_folder = NoteFolder.find(@note.note_folder_id)
    @notes = Note.where(note_folder_id: @note.note_folder_id).order("updated_at DESC")
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    redirect_to :root
  end
end
