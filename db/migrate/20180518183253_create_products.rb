class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.string :image_url
      t.string :unit_type
      t.string :sold_by
      t.string :amount_per_unit
      t.string :size
      t.string :currency
      t.string :price
      t.string :size
      t.string :currency
      t.float  :price

      t.timestamps
    end
  end
end
