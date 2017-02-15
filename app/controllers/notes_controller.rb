class NotesController < ApplicationController
  def index
    @note = current_user.notes.last
    @notes = current_user.notes.order("updated_at DESC")
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.new(set_params)
    if @note.save
      redirect_to :root
    else
      redirect_to new_note_path, alert: 'ノートの作成に失敗しました'
    end
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

  private
  def set_params
    params.require(:note).permit(:title, :body).merge(user_id: current_user.id, note_folder_id: 1)
  end
end
