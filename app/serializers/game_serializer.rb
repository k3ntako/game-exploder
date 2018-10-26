class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :logo_url, :promo_image_url, :description, :release_date, :publisher, :developer, :esrb, :average_score

  attribute :current_user, if: :show_page?
  has_many :reviews, if: :show_page?

  def average_score
    reviews = object.reviews
      if reviews.length != 0
        total_score = 0.0
        reviews.each do |review|
          total_score += review.score
        end
        return total_score/reviews.length
      end
      -1
  end

  def show_page?
    if(scope)
      return true
    end
    false
  end

  def current_user
    scope[:user]
  end
end
