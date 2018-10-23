class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable

  mount_uploader :profile_photo, ProfilePhotoUploader
  
  validates :email, presence: true
  validates :encrypted_password, presence: true
  validates :birthday, presence: true
  validates :username, presence: true

  has_many :reviews
end
