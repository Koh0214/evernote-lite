class AddIndexToNoteFolders < ActiveRecord::Migration[5.0]
  def change
    add_index :note_folders, :name
  end
end
