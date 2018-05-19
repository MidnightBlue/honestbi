# == Schema Information
#
# Table name: competitor_page_views
#
#  id           :integer          not null, primary key
#  user_uuid    :string
#  product_path :string
#  product_id   :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Competitor::PageView < ApplicationRecord
end
