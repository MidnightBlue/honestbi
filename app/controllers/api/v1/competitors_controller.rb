class Api::V1::CompetitorsController < Api::ApplicationController

  def index
    @competitors = Competitor.traceable

    render json: @competitors
  end



end
