Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show, :create] do
        resources :reviews, only: :index
      end
    end
  end

  root 'games#index'
  get '*path', to: 'games#index'
end
