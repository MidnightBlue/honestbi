class Api::V1::PageViewsController < Api::ApplicationController

  def create
    @page_view            = Competitor::Product::PageView.new
    @page_view.uuid       = params[:uuid]
    @page_view.product_id = Competitor::Product.find_by_url(params[:path]).try(:id)
    @page_view.name       = params[:name]
    @page_view.price      = params[:price]
    @page_view.save!

    render json: @page_view
  end


end
