class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :title, :body, :score, :username

  belongs_to :user

  def username
    object.user.username
  end
end
