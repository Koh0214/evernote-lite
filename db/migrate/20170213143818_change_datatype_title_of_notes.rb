class ChangeDatatypeTitleOfNotes < ActiveRecord::Migration[5.0]
  def change
    remove_column :notes, :title
    add_column :notes, :title, :text
  end
end
