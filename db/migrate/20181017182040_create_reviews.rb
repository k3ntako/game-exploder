class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :score, null: false

      t.belongs_to :game
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
