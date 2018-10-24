require 'rails_helper'

RSpec.describe Api::V1::GamesController, type: :controller do
  before(:each) do
    Game.create(name: "Overwatch", description: "copying the video", release_date: Date.new(2018,10,19), esrb: "Mature", promo_image_url: "image", developer: "Hairy Productions")
    Game.create(name: 'Call of Duty: Black Ops 4', description: 'COD Black Ops 4 is a shooting game', promo_image_url: 'https://orig00.deviantart.net/145b/f/2018/138/a/6/call_of_duty_black_ops_4___icon_by_blagoicons-dcbu90s.png',
    release_date: Date.new(2016,1,19), esrb: 'Mature', developer: "Almonds Productions")

  end

  after(:each) do
    Game.destroy_all
  end

   describe "GET#index" do
    it "should return a list of all the games" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(returned_json.length).to eq 2
      expect(returned_json[1]["name"]).to eq "Call of Duty: Black Ops 4"
     end
  end

  describe "GET#search" do
   it "should return a list of all the searched games" do
     get :search
     returned_json = JSON.parse(response.body)
     expect(response.status).to eq 200
     searched_games = []
     expect(response.content_type).to eq "application/json"
     searched_games << Game.find_by(name: "Overwatch")
     expect(searched_games.length).to eq 1
     expect(searched_games[0]["name"]).to eq "Overwatch"
    end
 end

  describe "POST#create" do
    let!(:new_game) { FactoryBot.create(:game, name: 'FIFA 19', description: 'FIFA 19 is a soccer game simulator', promo_image_url: 'image',
    release_date: Date.new(2018,10,19), esrb: 'Everyone', developer: "Gloves Productions") }

    let!(:game_data) { { name: new_game.name, description: new_game.description, promo_image_url: new_game.promo_image_url, release_date: new_game.release_date, esrb: new_game.esrb, developer: new_game.developer }.to_json }

    it "should create a new game" do
      expect{ post(:create, body: game_data) }.to change{ Game.count }.by 1
    end

    it "should return a json with the new game data" do
      post(:create, body: game_data)
      returned_json = [JSON.parse(response.body)]
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(returned_json.length).to eq 1
      expect(returned_json[0]["name"]).to eq new_game.name
      expect(returned_json[0]["developer"]).to eq new_game.developer
    end
  end
end
