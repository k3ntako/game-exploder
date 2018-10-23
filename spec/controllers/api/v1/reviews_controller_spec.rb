require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
    before(:each) do
      Game.create(name: "Overwatch", description: "copying the video", release_date: Date.new(2018,10,19), esrb: "Mature", promo_image_url: "image", developer: "Hairy Productions")
      User.create(first_name: "Richard", last_name: "Dumb", email: "afdgfdsf@gmail.com", password: "ksfldjlkj", password_confirmation: "ksfldjlkj", birthday: Date.new(1995,2,3), username: "fkjdsflk;dsjf")
      Review.create(title: 'Review', body: 'good game', score: 7, user: User.last, game: Game.last)
      sign_in User.last
    end

    it "creates a new review" do
      first_game = Game.last
      post_json = {
        body: Review.last.body,
        score: Review.last.score
      }

      post(:create, params: {user_id: User.last.id, game_id: Game.last.id, review: post_json})
      expect(Review.count).to eq 1

    end

    it "fails to creates a new review without body" do
      post_json = {
        score: Review.last.score
      }
      prev_count = Review.count
      Review.create(title: 'Review', score: 7, user: User.last, game: Game.last)
      expect(Review.count).to eq(prev_count)
    end

    it "fails to creates a new review without score" do
      post_json = {
        body: Review.last.body,
      }
      prev_count = Review.count
      Review.create(title: 'Review', body: 'good game', user: User.last, game: Game.last)
      expect(Review.count).to eq(prev_count)
    end

    it "returns the json of the new review" do
      post_json = {
        title: Review.last.title,
        body: Review.last.body,
        score: Review.last.score
      }

      post(:create, params: {game_id: Game.last.id, user_id: User.last.id, review: post_json})
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      review = returned_json["review"]

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(Review.last.body).to eq 'good game'
      expect(Review.last.score).to eq 7
    end
  end
