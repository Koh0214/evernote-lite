class AddColumnToNotes < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :user_id, :integer, foreign_key: true
  end
end
