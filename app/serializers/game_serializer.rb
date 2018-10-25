class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :logo_url, :promo_image_url, :description, :release_date, :publisher, :developer, :esrb, :average_score

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
    if(scope == "show")
      return true
    end
    false
  end
end
