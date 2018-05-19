Rails.application.routes.draw do

  namespace SpreeeedEngine.namespace.to_sym do
    resources :competitors
    resources :competitor_products,   controller: 'products'
    # resources :products
  end
  mount SpreeeedEngine::Engine => "/#{SpreeeedEngine.namespace}", as: SpreeeedEngine.namespace.to_sym

end
