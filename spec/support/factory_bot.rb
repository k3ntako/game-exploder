require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    sequence(:username) {|n| "user#{n}" }

    password { 'password' }
    password_confirmation { 'password' }
    birthday {Date.new(1995,2,3)}
  end

  factory :game do
    name { 'name' }
    description { 'description' }
    promo_image_url { 'promo_image_url' }
    release_date { Date.new(1999,9,10) }
    esrb { 'esrb' }
    developer { 'developer' }
  end

  factory :review do
    title {'title'}
    body {'body'}
    score { 'score' }
    game { 'game' }
    user { 'user' }
  end

end
