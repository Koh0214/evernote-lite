class CreateNoteFolders < ActiveRecord::Migration[5.0]
  def change
    create_table :note_folders do |t|
      t.string :name
      t.integer :user_id, foreign_key: true

      t.timestamps
    end
  end
end
