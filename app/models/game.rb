class Game < ApplicationRecord
  validates :name, presence: true
  validates :promo_image_url, presence: true
  validates :description, presence: true
  validates :year, null: false
  validates :esrb, null: false
end
