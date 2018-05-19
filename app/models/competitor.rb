# == Schema Information
#
# Table name: competitors
#
#  id                    :integer          not null, primary key
#  name                  :string
#  protocol              :string
#  host                  :string
#  product_path_patterns :text
#  product_url_pattern   :text
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class Competitor < ApplicationRecord
  scope :traceable, -> {}

  has_many :products, class_name: 'Competitor::Product', dependent: :destroy

  include SpreeeedEngine::Models::Competitor
  include SpreeeedEngine::Datatables::Competitor
end
