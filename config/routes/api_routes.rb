Rails.application.routes.draw do

  # token auth routes available at /api/v1/auth
  namespace :api do
    namespace :v1 do
      resources :products,  only: [:show]
    end
  end

end
