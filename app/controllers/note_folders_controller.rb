class NoteFoldersController < ApplicationController
  before_action :set_note_folder, only: [:show, :edit]

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
    @note = @note_folder.notes.last
    redirect_to note_folder_note_path(@note_folder, @note)
  end

  def edit
  end

  def update
    @note_folder = NoteFolder.find(params[:id]).update(set_params)
    @note_folder = NoteFolder.find(params[:id])
    redirect_to note_folder_path(@note_folder)
  end

  private
  def set_params
    params.require(:note_folder).permit(:name).merge(user_id: current_user.id)
  end

  def set_note_folder
    @note_folder = NoteFolder.find(params[:id])
  end
end
