require 'rails_helper'

RSpec.describe Api::V1::GamesController, type: :controller do
  before(:each) do
    Game.create(name: "Overwatch", description: "copying the video", year: '11', esrb: "M", promo_image_url: "image")
    Game.create(name: 'Call of Duty: Black Ops 4', description: 'COD Black Ops 4 is a shooting game', promo_image_url: 'https://orig00.deviantart.net/145b/f/2018/138/a/6/call_of_duty_black_ops_4___icon_by_blagoicons-dcbu90s.png',
    year: '2018', esrb: 'M')
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

  describe "POST#create" do
    let!(:new_game) { FactoryBot.create(:game, name: 'FIFA 19', description: 'FIFA 19 is a soccer game simulator', promo_image_url: 'image',
    year: '2018', esrb: 'E') }

    let!(:game_data) { { name: new_game.name, description: new_game.description, promo_image_url: new_game.promo_image_url, year: new_game.year, esrb: new_game.esrb }.to_json }

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
      expect(returned_json[0]["year"]).to eq new_game.year
    end
  end
end
