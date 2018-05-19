require 'test_helper'

class Api::V1::CompetitorsControllerTest < ActionDispatch::IntegrationTest
  def setup
  end

  def test_get_competitors
    get api_v1_competitors_path
    assert_response :success

    assert_equal 2, assigns(:competitors).size
  end
end
