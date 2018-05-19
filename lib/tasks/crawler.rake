namespace :crawler do
  desc "TODO"
  task grab: :environment do
    require 'mechanize'
    agent = Mechanize.new
    page = agent.get('https://24h.pchome.com.tw/prod/DBAC9J-A71212173')
    page.search('//*[@id="NickContainer"]')
  end

end
