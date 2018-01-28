Rails.application.routes.draw do
  root to: 'application#intro'
  resources :tasks
end
