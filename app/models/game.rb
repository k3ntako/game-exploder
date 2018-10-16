class Game < ApplicationRecord
  validates_presence_of :name, :promo_image_url, :description, :year, :esrb
end
