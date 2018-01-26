require 'test_helper'

class GlueStatControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get glue_stat_create_url
    assert_response :success
  end

end
