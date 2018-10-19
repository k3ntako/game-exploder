class Api::V1::GamesController < ApplicationController
  def show
    render json: Game.find(params[:id]), adapter: :json
  end
  
  def index
    render json: Game.all, adapter: :json
  end

  def create
    data = JSON.parse(request.body.read)
    new_game = Game.create(name: data["name"], promo_image_url: data["promo_image_url"], description: data["description"], year: data["year"], esrb: data["esrb"])
    render json: new_game, adapter: :json
  end
end
