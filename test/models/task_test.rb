require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def setup
    @task = Task.new(
      title: "Example title",
      time_completed: Time.now
    )
  end

  test "should be valid" do
    assert @task.valid?
  end

  test "should not allow missing attributes" do
    @task.title = ""
    assert_not @task.valid?
  end
end
