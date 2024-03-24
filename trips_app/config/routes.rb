Rails.application.routes.draw do
  get 'users/create'
  post '/signup', to: 'users#create'
  post '/signin', to: 'sessions#create'
  post '/signout', to: 'sessions#destroy'
  resources :destinations, only: [:index, :create, :update, :destroy] do
    member do
      get 'get_associated_activities'
    end
  end
  resources :activities, only: [:index, :show, :create, :update, :destroy]
  resources :trips, only: [:index, :show, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
