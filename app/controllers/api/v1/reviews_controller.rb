class Api::V1::ReviewsController < ApplicationController
  def index
    render json: Game.find(params[:game_id]).reviews.order("created_at DESC"), adapter: :json
  end
end
