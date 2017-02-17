class NotesController < ApplicationController
  before_action :set_note_folder, except: [:index]

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
      redirect_to note_folder_path(@note_folder)
    else
      redirect_to new_note_path, alert: 'ノートの作成に失敗しました'
    end
  end

  def show
    @note = Note.find(params[:id]) #ここのidはnoteのid
    @notes = Note.where(note_folder_id: params[:note_folder_id]).order("updated_at DESC")

    gon.note_id = @note.id
    gon.note_folder_id = @note_folder.id
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    redirect_to note_folder_path(@note_folder)
  end

  def edit
    @note = Note.find(params[:id])
  end

  def update
    @note = Note.find(params[:id])
    if @note.update(set_params)
      respond_to do |format|
        format.html { redirect_to note_folder_path(@note_folder) }
        format.json { render json: @note }
      end
    else
      redirect_to new_note_path, alert: 'ノートの作成に失敗しました'
    end
  end



  private
  def set_params
    params.require(:note).permit(:title, :body).merge(user_id: current_user.id, note_folder_id: params[:note_folder_id])
  end

  def set_note_folder
    @note_folder = NoteFolder.find(params[:note_folder_id])
  end
end
