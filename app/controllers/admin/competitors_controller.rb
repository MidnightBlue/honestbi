class Admin::CompetitorsController < Admin::ApplicationController

  def show
    super
  end


  private
    def set_klass
      @klass = Competitor
    end

end
