class CreateCompetitorProductPageViews < ActiveRecord::Migration[5.2]

  # class Competitor::Product < ApplicationRecord; end

  def change
    create_table :competitor_product_page_views do |t|
      t.integer :product_id
      t.string  :uuid
      t.string  :name
      t.integer :price
      t.integer :quantity

      t.timestamps
    end
  end

  def data
    # Competitor::Product::PageView.create!({
    #   product_id: Competitor::Product.first.id,
    #   uuid: 'bf714d4cf8d9c25f51b3bed6ea94f1c2e3cf898f1ee7abdbb1b53a2fce8df',
    #   name: '有豐食品 北海鱈魚香絲 大包裝(600g)',
    #   price: 420,
    #   quantity: nil
    # })
  end
end
