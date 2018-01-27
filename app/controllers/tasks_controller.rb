class TasksController < ApplicationController
  def new
    @task = Task.new
    render :new
  end

  def index 
    render :index
  end

  def show
    @task = Task.find(params[:id])
    render :show
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      redirect_to :action => "show", :id => @task.id
    else
      render :new
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :time_completed)
  end
end
