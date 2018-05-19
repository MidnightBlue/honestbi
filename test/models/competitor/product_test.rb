# == Schema Information
#
# Table name: competitor_products
#
#  id         :integer          not null, primary key
#  name       :string
#  price      :integer
#  quantity   :integer
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class Competitor::ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
