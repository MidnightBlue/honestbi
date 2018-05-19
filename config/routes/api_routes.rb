Rails.application.routes.draw do

  # token auth routes available at /api/v1/auth
  namespace :api do
    namespace :v1 do
      resources :competitors, only: [:index]
      resources :products,    only: [:show]
      resources :page_views,  only: [:create]
    end
  end

end
