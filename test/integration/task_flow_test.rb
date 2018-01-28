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
end