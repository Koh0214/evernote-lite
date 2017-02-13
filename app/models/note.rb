class Note < ApplicationRecord
  belongs_to :note_folder
  belongs_to :user
end
