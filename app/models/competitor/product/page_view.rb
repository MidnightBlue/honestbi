# == Schema Information
#
# Table name: competitor_product_page_views
#
#  id         :integer          not null, primary key
#  uuid       :string
#  name       :string
#  price      :integer
#  quantity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Competitor::Product::PageView < ApplicationRecord
end
