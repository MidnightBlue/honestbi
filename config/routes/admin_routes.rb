Rails.application.routes.draw do

  namespace SpreeeedEngine.namespace.to_sym do
    resources :products
  end
  mount SpreeeedEngine::Engine => "/#{SpreeeedEngine.namespace}", as: SpreeeedEngine.namespace.to_sym

end
