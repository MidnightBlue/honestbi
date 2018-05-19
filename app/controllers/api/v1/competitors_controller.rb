class Api::V1::CompetitorsController < ApplicationController

  def index
    @competitors = Competitor.traceable

    render json: @competitors
  end



end
