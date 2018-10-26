class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authorize_user, except: [:index]

  def index
    reviews = Game.find(params[:game_id]).reviews.order("created_at DESC")
    user_id = -1

    if current_user
      user_id = current_user.id
    end

    render json: {reviews: ActiveModel::Serializer::ArraySerializer.new(reviews,each_serializer: ReviewSerializer), user_id: user_id}
  end

  def new
  end

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
