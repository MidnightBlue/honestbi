class Api::V1::PageViewsController < Api::ApplicationController

  def create
    @page_view = Competitor::PageView.new({user_uuid: params[:uuid], product_path: params[:path]})
    @page_view.save

    render json: @page_view
  end


end
