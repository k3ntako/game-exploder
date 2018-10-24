class Api::V1::GamesController < ApplicationController
  def show
    render json: Game.find(params[:id])
  end

  def index
    render json: Game.all
  end

  def create
    data = JSON.parse(request.body.read)
    new_game = Game.create(name: data["name"], promo_image_url: data["promo_image_url"], description: data["description"], release_date: data["release_date"], esrb: data["esrb"], developer: data["developer"])
    render json: new_game
  end
end
