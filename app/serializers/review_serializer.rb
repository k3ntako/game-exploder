class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :title, :body, :score, :username, :user_id, :photo

  belongs_to :user

  def user_id
    object.user.id
  end

  def username
    object.user.username
  end

  def photo
    object.user.profile_photo
  end
end
