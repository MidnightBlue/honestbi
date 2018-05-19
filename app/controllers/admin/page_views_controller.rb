class Admin::PageViewsController < Admin::ApplicationController

  private
    def set_klass
      @klass = Competitor::Product::PageView
    end

end
