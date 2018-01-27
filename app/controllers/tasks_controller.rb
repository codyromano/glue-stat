class TasksController < ApplicationController
  def new
    @task = Task.new
    render :new
  end

  def index 
    render :index
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      render :new
    else
      render :new
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :time_completed)
  end
end
