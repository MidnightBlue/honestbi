# == Schema Information
#
# Table name: competitor_product_page_views
#
#  id         :integer          not null, primary key
#  product_id :integer
#  uuid       :string
#  name       :string
#  price      :integer
#  quantity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Competitor::Product::PageView < ApplicationRecord
end
