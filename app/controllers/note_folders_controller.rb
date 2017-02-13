class NoteFoldersController < ApplicationController

  def index
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



  private
  def set_params
    params.require(:note_folder).permit(:name).merge(user_id: current_user.id)
  end
end
