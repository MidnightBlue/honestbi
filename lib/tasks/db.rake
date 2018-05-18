namespace :db do
  namespace :test do
    task :prepare => :environment do
      puts '==== Prepare seed data ===='
      Rake::Task['db:seed'].invoke
    end
  end

  desc "Load seed fixtures (from db/fixtures) into the current environment's database."
  task :rebuild => :environment do
    `bin/rails db:environment:set RAILS_ENV=development`
    puts "RAILS_ENV = #{Rails.env}"
    puts 'run rake db:drop'
    Rake::Task['db:drop'].invoke
    puts 'run rake db:create'
    Rake::Task['db:create'].invoke

    puts 'run rake db:migrate'
    Rake::Task['db:migrate'].invoke
    puts 'run rake db:seed'
    Rake::Task['db:seed'].invoke

    puts 'run rake db:structure:dump'
    Rake::Task['db:structure:dump'].invoke
    puts 'run rake db:schema:dump'
    Rake::Task['db:schema:dump'].invoke

    puts 'run rake log:clear'
    Rake::Task['log:clear'].invoke

  end
end
