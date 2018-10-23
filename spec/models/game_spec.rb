require 'spec_helper'

describe Game do
  it { should have_valid(:name).when("Overwatch") }
  it { should_not have_valid(:name).when(nil, "") }

  it {should have_valid(:promo_image_url).when("https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/2000px-Overwatch_circle_logo.svg.png")}
  it { should_not have_valid(:promo_image_url).when(nil, "") }

  it { should have_valid(:description).when("Overwatch is a team-based multiplayer first-person shooter")}
  it { should_not have_valid(:description).when(nil, "") }

  it { should have_valid(:developer).when("Cool Peoples") }
  it { should_not have_valid(:developer).when(nil, "") }

  it { should have_valid(:esrb).when("Teen") }
  it { should_not have_valid(:esrb).when(nil, "") }
end
