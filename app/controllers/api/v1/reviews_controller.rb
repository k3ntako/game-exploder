class Api::V1::ReviewsController < ApplicationController
protect_from_forgery unless: -> { request.format.json? }
  def new
  end

  def create
    # data = JSON.parse(request.body.read)
    
    new_review = Review.create(title: review_params[:title], body: review_params[:body], score: review_params[:score], game_id: review_params[:game_id], user: current_user)

    render json: new_review, adapter: :json
  end

  private

  def review_params
    params.permit(:title, :body, :score, :game_id)
  end
end
