require 'test_helper'
 
class TaskFlowTest < Capybara::Rails::TestCase
  def setup
    @one = tasks :one
    @two = tasks :two
  end

  test "tasks listed on index page" do
    visit tasks_path
    assert page.has_content?(@one.title)
    assert page.has_content?(@two.title)
  end

  test "creating a task" do
    visit tasks_path
    click_on "Create a Glue Stat"

    fill_in "Title", with: "My Glue Stat Title"
    click_on "Create Glue Stat"

    assert_current_path task_path(Task.last)
    assert page.has_content?("My Glue Stat Title")
  end
end