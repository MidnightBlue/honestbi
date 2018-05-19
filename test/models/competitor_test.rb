# == Schema Information
#
# Table name: competitors
#
#  id                    :integer          not null, primary key
#  name                  :string
#  protocol              :string
#  host                  :string
#  product_path_patterns :text
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

require 'test_helper'

class CompetitorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
