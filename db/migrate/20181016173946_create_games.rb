class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name, null: false
      t.string :logo_url
      t.string :promo_image_url, null: false
      t.string :description, null: false
      t.date :release_date, null: false
      t.string :publisher
      t.string :developer, null: false
      t.string :esrb, null: false

      t.timestamps null: false
    end
  end
end
