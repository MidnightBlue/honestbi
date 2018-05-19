class Admin::ProductsController < Admin::ApplicationController

  private
    def set_klass
      @klass = Competitor::Product
    end

end
