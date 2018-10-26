require 'rails_helper'

RSpec.describe Api::V1::CommentsController, type: :controller do
  describe 'a' do
    let!(:user) {User.create(first_name: "Richard", last_name: "Smith", email: "RSmith@gmail.com", password: "password123", password_confirmation: "password123", birthday: Date.new(1995,2,3), username: "RSmith")}

    before(:each) do
      allow(controller).to receive(:current_user).and_return(user)
      Game.create(name: "Overwatch", description: "copying the video", release_date: Date.new(2018,10,19), esrb: "Mature", promo_image_url: "image", developer: "Hairy Productions")

      Review.create(title: 'Review', body: 'good game', score: 7, user: user, game: Game.last)
      Comment.create(body: "Very helpful!", user: user, review: Review.last)

    end

    it "creates a new comment" do
      first_comment = Comment.last
      post_json = {
        body: Comment.last.body
      }

      post(:create, params: {user_id: user.id, review_id: Review.last.id, review: post_json})
      expect(Comment.count).to eq 1
    end

    it "fails to creates a new comment without body" do
      post_json = {
        body: nil
      }
      prev_count = Comment.count
      Comment.create(user: user, review: Review.last)
      expect(Comment.count).to eq(prev_count)
    end

    it "returns the json of the new comment" do

      post_json = {
        body: Comment.last.body
      }

      post(:create, params: {review_id: Review.last.id, user: user, review: post_json})
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
    end
  end
end
