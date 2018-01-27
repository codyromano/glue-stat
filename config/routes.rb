Rails.application.routes.draw do
  # get '/', to: 'application#intro'
  root to: 'application#intro'

  get 'tasks/new'
  resources :tasks

  get 'tasks/:id'
  resources :tasks
end
