require 'rails_helper'
require 'spec_helper'

RSpec.describe Review, type: :model do
  describe "Review model" do
    it { should have_valid(:title).when("This game is eye opening!") }
    it { should_not have_valid(:title).when(nil, "") }

    it { should have_valid(:body).when("When I played it, I had to open my eyes.") }
    it { should_not have_valid(:body).when(nil, "") }

    it { should have_valid(:score).when(0) }
    it { should have_valid(:score).when(5) }
    it { should have_valid(:score).when(10) }
    it { should_not have_valid(:score).when(-1) }
    it { should_not have_valid(:score).when(11) }
    it { should_not have_valid(:score).when(5.5) }
    it { should_not have_valid(:score).when(nil, "") }
  end
end
