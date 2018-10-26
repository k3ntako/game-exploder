require 'rails_helper'

RSpec.describe Api::V1::CommentsController, type: :controller do
  before(:each) do
    Game.create(name: "Overwatch", description: "copying the video", release_date: Date.new(2018,10,19), esrb: "Mature", promo_image_url: "image", developer: "Hairy Productions")
    User.create(first_name: "Richard", last_name: "Dumb", email: "afdgfdsf@gmail.com", password: "ksfldjlkj", password_confirmation: "ksfldjlkj", birthday: Date.new(1995,2,3), username: "fkjdsflk;dsjf")
    Review.create(title: 'Review', body: 'good game', score: 7, user: User.last, game: Game.last)
    Comment.create(body: "Your comment sucks", user: User.last, review: Review.last)

  end

  it "creates a new comment" do
    first_comment = Comment.last
    post_json = {
      body: Comment.last.body
    }

    post(:create, params: {user_id: User.last.id, review_id: Review.last.id, review: post_json})
    expect(Comment.count).to eq 1

  end

  it "fails to creates a new comment without body" do
    post_json = {
      body: nil
    }
    prev_count = Comment.count
    Comment.create(user: User.last, review: Review.last)
    expect(Comment.count).to eq(prev_count)
  end

  it "returns the json of the new review" do
    post_json = {
      body: Comment.last.body
    }

      post(:create, params: {review_id: Review.last.id, user_id: User.last.id, review: post_json})
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      review = returned_json["review"]

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(Comment.last.body).to eq "Your comment sucks"
    end

end
