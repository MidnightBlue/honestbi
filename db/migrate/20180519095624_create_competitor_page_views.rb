class CreateCompetitorPageViews < ActiveRecord::Migration[5.2]
  def change
    create_table :competitor_page_views do |t|
      t.string :user_uuid
      t.string :product_path
      t.string :product_id

      t.timestamps
    end
  end
end
