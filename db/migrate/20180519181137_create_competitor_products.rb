class CreateCompetitorProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :competitor_products do |t|
      t.integer :competitor_id
      t.string  :name
      # t.integer :price
      t.string  :size
      # t.integer :quantity
      t.string  :url

      t.timestamps
    end
  end

  def data
    Competitor::Product.create({
      competitor_id: Competitor.find_by_name('24h Pchome').id,
      name: '北海鱈魚香絲',
      size: '600g',
      url:  'https://24h.pchome.com.tw/prod/DBAC9J-A71212173'
    })
    Competitor::Product.create({
      competitor_id: Competitor.find_by_name('24h Pchome').id,
      name: '蘋果西打',
      size: '2000ml',
      url:  'https://24h.pchome.com.tw/prod/DBAB1K-A9006R0QV?q=/S/DBAB63'
    })
    Competitor::Product.create({
      competitor_id: Competitor.find_by_name('momo Shop').id,
      name: '北海鱈魚香絲',
      size: '600g',
      url:  'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?mdiv=ghostShopCart&i_code=4505323'
    })
    Competitor::Product.create({
      competitor_id: Competitor.find_by_name('24h Pchome').id,
      name: '蘋果西打',
      size: '2000ml',
      url:  'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?mdiv=ghostShopCart&i_code=2638259'
    })
  end
end
