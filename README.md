# README

##users (deviseで生成)
|column|data type|    keys   |
|:----:|:-------:|:---------:|
|name  |string   |null: false|
|email |string   |null: false, unique: true|
|password|string |null: false|

##noteFolders
|column|data type|    keys   |
|:----:|:-------:|:---------:|
|name|string|null: false|
|user_id|integer|foreign_key: true|

##notes
|column|data type|    keys   |
|:----:|:-------:|:---------:|
|title|text|add_index|
|body|text|add_index|
|noteFolder_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|


#アソシエーション設計

##users
has_many :note_folders

##noteFolders
belongs_to :user  
has_many :notes

##notes
belongs_to :note_folders  
