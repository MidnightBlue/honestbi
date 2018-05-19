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
  belongs_to :product, class_name: 'Competitor::Product'

  include SpreeeedEngine::Models::Competitor::Product::PageView
  include SpreeeedEngine::Datatables::Competitor::Product::PageView

  def difference(to=:mapping_product)
    result = ActiveSupport::OrderedHash.new
    result[:difference] = ActiveSupport::OrderedHash.new

    case to
    when :mapping_product
      if product.honestbee_product.price != price
        result[:difference][:price] = price - product.honestbee_product.price
      end
    when :last_page_view
      last_page_view = product.page_views.where('id < ?', id).first

      return result unless last_page_view.present?

      if last_page_view.price != price
        result[:difference][:price] = price - last_page_view.price
      end
    else


    end

    result
  end


  def as_json(options={})
    super.merge(difference)
  end

end
