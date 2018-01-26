Rails.application.routes.draw do
  get 'glue_stat/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#hello'
end
