class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :title, :body, :score

  belongs_to :user
end
