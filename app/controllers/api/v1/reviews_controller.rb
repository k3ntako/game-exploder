class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authorize_user, except: :show


  def create
    new_review = Review.create(title: review_params[:title], body: review_params[:body], score: review_params[:score], game_id: review_params[:game_id], user: current_user)

    render json: new_review
  end

  def show
    render json: Review.find(params[:id])
  end

  def destroy
    if current_user_access
      Review.destroy(params[:id])
    else
      render json: {message: "You can only delete your own reviews."}, status: 401
    end
  end

  private

  def review_params
    params.permit(:title, :body, :score, :game_id)
  end

  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("Not Found")
      redirect_to root_path
    end
  end

  def current_user_access
    current_user.id == Review.find(params[:id]).user_id
  end
end
