class Api::V1::CommentsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
    before_action :authorize_user, only: :create

  def index
    comments = Review.find(params[:review_id]).comments.order("created_at DESC")
    render json: comments
  end

  def new
  end

  def create
    new_comment = Comment.create(body: comment_params[:body], review_id: comment_params[:review_id], user: current_user)
    render json: new_comment
  end


  private

  def comment_params
    params.permit(:body, :review_id)
  end
end
