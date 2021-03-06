class Game < ApplicationRecord
  validates_presence_of :name, :promo_image_url, :description, :release_date, :esrb, :developer

  has_many :reviews
end
