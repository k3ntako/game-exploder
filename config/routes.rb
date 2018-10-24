Rails.application.routes.draw do
  devise_for :users
  
  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :create, :show] do
        resources :reviews, only: [:new, :create, :index]
      end
    end
  end

  root 'games#index'
  get '/games', to: 'games#index'
  get '/games/:id', to: 'games#index'
  get '/games/:id/reviews/new', to: 'games#index'
end
