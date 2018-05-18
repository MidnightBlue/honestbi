Rails.application.routes.draw do

  def draw(routes_name)
    instance_eval(File.read(Rails.root.join("config/routes/#{routes_name}.rb")))
  end

  draw :devise_routes
  draw :admin_routes
  draw :api_routes
  draw :sidekiq_routes

  root 'admin/home#index'

end
