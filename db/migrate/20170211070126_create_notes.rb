class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.integer   :title
      t.text      :body
      t.integer   :note_folder_id , foreign_key: true

      t.timestamps
    end
  end
end
