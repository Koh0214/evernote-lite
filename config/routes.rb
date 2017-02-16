Rails.application.routes.draw do
  devise_for :users
  root 'note_folders#index'
  resources :note_folders do
    resources :notes
  end
end
