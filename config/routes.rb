Rails.application.routes.draw do
  get 'sessions/new'

  root 'pages#index'
  get 'pages/help'

  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'


  get "/topics/my_index",to: "topics#my_index",as: "my_topics"
  resources :users
  resources :topics

  get 'favorites/index'
  post '/favorites', to: 'favorites#create'

  resources :comments

  get 'comments/index'
  post '/comments', to: 'comments#create'

end
