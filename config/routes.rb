Rails.application.routes.draw do
  root 'pages#home'

  match '/socket.io/*path', to: 'flask_server#forward_websocket', via: [:all]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
