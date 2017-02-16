Rails.application.routes.draw do
  devise_for :users
  root 'notes#index'
  resources :note_folders do
    resources :notes
  end
end
