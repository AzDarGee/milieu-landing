Rails.application.routes.draw do
  root 'static_pages#landing'

  resources :static_pages, only: [:create]
  
end
