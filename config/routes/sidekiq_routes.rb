Rails.application.routes.draw do

  require 'sidekiq/web'
  Sidekiq::Web.use Rack::Auth::Basic do |username, password|
    username == 'admin' && password == '0987612345'
  end if Rails.env.production?
  mount Sidekiq::Web, at: '/sidekiq'

end
