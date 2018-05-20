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

  def diff(to=:mapping_product)
    result = ActiveSupport::OrderedHash.new
    result[:diff] = ActiveSupport::OrderedHash.new

    case to
    when :mapping_product
      result[:diff][:name]            = product.honestbee_product.title
      result[:diff][:image_url]       = product.honestbee_product.image_url
      result[:diff][:size]            = product.honestbee_product.size
      result[:diff][:honestbee_price] = product.honestbee_product.price
      result[:diff][:price]           = price
    when :last_page_view
      last_page_view = product.page_views.where('id < ?', id).first

      return result unless last_page_view.present?

      if last_page_view.price != price
        result[:diff][:price] = price - last_page_view.price
      end
    else


    end

    result
  end


  def as_json(options={})
    super.merge(diff)
  end

end
