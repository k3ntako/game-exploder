require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    sequence(:username) {|n| "user#{n}" }

    password { 'password' }
    password_confirmation { 'password' }
    birthday {Date.new(1995,2,3)}
  end

end
