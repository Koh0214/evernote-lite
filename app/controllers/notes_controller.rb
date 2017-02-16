class NotesController < ApplicationController
  def index
    @note = current_user.notes.last
    @notes = current_user.notes.order("updated_at DESC")
  end

  def new
    @note = Note.new
    @note_folder = NoteFolder.find(params[:note_folder_id])
  end

  def create
    @note_folder = NoteFolder.find(params[:note_folder_id])
    @note = Note.new(set_params)
    if @note.save
      redirect_to note_folder_path(@note_folder)
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

  def edit
    @note = Note.find(params[:id])
    @note_folder = NoteFolder.find(params[:note_folder_id])
  end

  def update
    @note_folder = NoteFolder.find(params[:note_folder_id])
    if @note = Note.update(set_params)
      redirect_to note_folder_path(@note_folder)
    else
      redirect_to new_note_path, alert: 'ノートの作成に失敗しました'
    end
  end



  private
  def set_params
    params.require(:note).permit(:title, :body).merge(user_id: current_user.id, note_folder_id: params[:note_folder_id])
  end
end
