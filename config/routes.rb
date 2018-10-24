Rails.application.routes.draw do
  devise_for :users
<<<<<<< HEAD

  namespace :api do
    namespace :v1 do
      post 'games/search', to: 'games#search'
=======
  
  namespace :api do
    namespace :v1 do
>>>>>>> 69fce6685f2495e133bc33f8696f30252bce412f
      resources :games, only: [:index, :create, :show] do
        resources :reviews, only: [:new, :create, :index]
      end
    end
  end

  root 'games#index'
<<<<<<< HEAD
  get '*path', to: 'games#index'
=======
  get '/games', to: 'games#index'
  get '/games/:id', to: 'games#index'
  get '/games/:id/reviews/new', to: 'games#index'
>>>>>>> 69fce6685f2495e133bc33f8696f30252bce412f
end
