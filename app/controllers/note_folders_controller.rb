class NoteFoldersController < ApplicationController

  def index
    @note_folders = current_user.note_folders
  end

  def new
    @note_folder = NoteFolder.new
  end

  def create
    @note_folder = NoteFolder.new(set_params)
    if @note_folder.save
      redirect_to :root
    else
      redirect_to new_note_folder_path, alert: 'フォルダの作成に失敗しました'
    end
  end

  def show
    @note_folder = NoteFolder.find(params[:id])
    @notes = @note_folder.notes.order("updated_at DESC")
    @note = @note_folder.notes.last
  end

  private
  def set_params
    params.require(:note_folder).permit(:name).merge(user_id: current_user.id)
  end
end
