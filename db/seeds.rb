# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

honestbee_products = ActiveSupport::JSON.decode(File.read("#{Rails.root}/db/data/products.json"))['products']
honestbee_products.each do |hp|
  product = Product.new({
    title:           hp['title'],
    image_url:       hp['imageUrl'],
    unit_type:       hp['unitType'],
    sold_by:         hp['soldBy'],
    amount_per_unit: hp['amountPerUnit'],
    size:            hp['size'],
    currency:        hp['currency'],
    price:           hp['price'].to_f,
  })
  product.id = hp['id'].to_i
  product.save!
end
