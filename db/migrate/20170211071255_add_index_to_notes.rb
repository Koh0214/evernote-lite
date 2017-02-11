class AddIndexToNotes < ActiveRecord::Migration[5.0]
  def change
    add_index :notes, :title
  end
end
