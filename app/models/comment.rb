class Comment < ApplicationRecord
  validates_presence_of :body
  
  belongs_to :review
  belongs_to :user
end
