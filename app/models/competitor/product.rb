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

class Competitor::Product < ApplicationRecord
end
