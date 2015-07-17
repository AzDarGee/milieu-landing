Rails.application.routes.draw do
  get 'landing', to: 'static_pages#landing'

  resources :static_pages, only: [:create]
  
  root 'static_pages#landing'
  get 'french', to: 'static_pages#french'
end
