class Review < ApplicationRecord
  validates_presence_of :title, :body, :score
  validates :score, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 10}

  belongs_to :game
  belongs_to :user

  has_many :comments
end
