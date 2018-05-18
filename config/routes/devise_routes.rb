Rails.application.routes.draw do

  devise_for :users, skip: [:confirmations, :passwords, :unlocks, :omniauth_callbacks]

end
