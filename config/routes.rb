Rails.application.routes.draw do
  get 'tasks/new'
  resources :tasks

  get 'tasks/:id'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#hello'
end
