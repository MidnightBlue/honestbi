class Admin::CompetitorsController < Admin::ApplicationController

  private
    def set_klass
      @klass = Competitor
    end

end
