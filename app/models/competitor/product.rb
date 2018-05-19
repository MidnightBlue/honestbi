# == Schema Information
#
# Table name: competitor_products
#
#  id            :integer          not null, primary key
#  competitor_id :integer
#  name          :string
#  size          :string
#  url           :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Competitor::Product < ApplicationRecord
  belongs_to :competitor
  has_many   :page_views, class_name: 'Competitor::Product::PageView', foreign_key: 'product_id', dependent: :destroy

  include SpreeeedEngine::Models::Competitor::Product
  include SpreeeedEngine::Datatables::Competitor::Product

end
