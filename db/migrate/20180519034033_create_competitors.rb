class CreateCompetitors < ActiveRecord::Migration[5.2]
  def change
    create_table :competitors do |t|
      t.string :name
      t.string :protocol
      t.string :host
      t.text   :product_path_patterns

      t.timestamps
    end
  end

  def data
    Competitor.create({
      name:                  '24h Pchome',
      protocol:              'https',
      host:                  '24h.pchome.com.tw',
      product_path_patterns: '/prod/'
    })
    Competitor.create({
      name:                  'momo Shop',
      protocol:              'https',
      host:                  'www.momoshop.com.tw',
      product_path_patterns: '/goods/GoodsDetail.jsp'
    })
    Competitor.create({
      name:                  'localhost',
      protocol:              'http',
      host:                  'localhost',
      product_path_patterns: '/'
    })
  end
end
