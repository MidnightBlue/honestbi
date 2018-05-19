class CreateCompetitorProductPageViews < ActiveRecord::Migration[5.2]
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
end
