require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :game do
    name { 'name' }
    description { 'description' }
    promo_image_url { 'promo_image_url' }
    year { 'year' }
    esrb { 'esrb' }
  end

end
