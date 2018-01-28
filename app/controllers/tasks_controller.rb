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

  def update
    @task = Task.find(params[:id])
    @task[:time_completed] = Time.now

    if @task.save
      redirect_to :action => "show", :id => @task.id
    else
      # TODO: Display error
      render :new
    end
  end

  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
      redirect_to :action => "index"
    else
      # TODO: Display error
      render :new
    end
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
    new_params = params.require(:task).permit(:title)
    new_params[:time_completed] = Time.now

    new_params
  end
end
