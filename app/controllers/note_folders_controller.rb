class NoteFoldersController < ApplicationController

  def index
  end

  def new
    @note_folder = NoteFolder.new
  end

  def create
    @note_folder = NoteFolder.create(set_params)
    redirect_to :root
  end



  private
  def set_params
    params.require(:note_folder).permit(:name).merge(user_id: current_user.id)
  end
end
