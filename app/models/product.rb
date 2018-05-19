# == Schema Information
#
# Table name: products
#
#  id              :integer          not null, primary key
#  title           :string
#  image_url       :string
#  unit_type       :string
#  sold_by         :string
#  amount_per_unit :string
#  size            :string
#  currency        :string
#  price           :float
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Product < ApplicationRecord
  searchkick

  def should_index?
    true
  end

  def search_data
    {
        title: title,
        price: price,
        size: size
    }
  end


end
