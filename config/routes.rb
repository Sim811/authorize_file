Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
    
  namespace :api do
    resources :users do
    resources :posts
    end

    get 'user_posts/:user_id', to: 'posts#user_posts'
  end
end
