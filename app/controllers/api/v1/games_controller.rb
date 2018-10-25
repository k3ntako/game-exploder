class Api::V1::GamesController < ApplicationController
  def show
    game = [Game.find(params[:id])]

    render json: ActiveModel::Serializer::ArraySerializer.new(game, { scope: "show" })

  end

  def index
    all_games = Game.all
    render json: ActiveModel::Serializer::ArraySerializer.new(all_games)
  end

  def create
    data = JSON.parse(request.body.read)
    new_game = Game.create(name: data["name"], promo_image_url: data["promo_image_url"], description: data["description"], release_date: data["release_date"], esrb: data["esrb"], developer: data["developer"])
    render json: new_game
  end

  def search
    @games = Game.where("name ILIKE ?", "%#{params['search_string']}%")
    render json: @games
  end
end
