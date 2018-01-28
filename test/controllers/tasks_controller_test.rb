require 'test_helper'

class TasksControllerTest < ActionDispatch::IntegrationTest
  test "should feature an index heading" do
    get "/tasks"
    assert_select "h1", "Manage Glue Stats"
  end
end
