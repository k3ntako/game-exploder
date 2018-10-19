# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

game_attributes = [
  {name: 'Overwatch', description: 'is a team-based multiplayer first-person shooter.', promo_image_url: 'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc6j8bTV3N2m4CBQKAT1cS6lUOQX.ngdSgiLRMdAu32DtzDJKUuzN1aOTJPFi7RvCaG_JZJBF7TU37nEBObS0xnS6oexMnX_VmFbdu1_AVM3gPqcljwPx9mL3nBEEGiHRvwz1VPBNPlVPoJ.39_fHs1EepEJunV8KgSqlTbNGimJs-&h=1080&w=1920&format=jpg', developer: "Blizzard Entertainment", release_date: Date.new(2016,5,24), esrb: 'Teen'},
 {name: 'FIFA 19', description: 'delivers a champion-caliber experience on and off the pitch. Led by the prestigious UEFA Champions League, FIFA 19 offers enhanced gameplay features that allow you to control the pitch in every moment.', promo_image_url: 'https://images.performgroup.com/di/library/GOAL/c7/5a/fifa-19-ronaldo-neymar_e4vrh56c4op71vn6mlvx1lzsr.jpg?t=-318191675&quality=90&w=1280',developer: "Electronic Arts", release_date: Date.new(2018,9,28), esrb: 'Everyone'},
 {name: 'Call of Duty: Black Ops 4', description: 'is a multiplayer first-person shooter video game. Unlike previous titles in the Call of Duty series, Black Ops 4 is the first entry to not feature a traditional single-player campaign, and contains only Multiplayer, Zombies and a new battle royale mode called Blackout.', promo_image_url: 'https://static.gamespot.com/uploads/scale_super/1165/11653967/3393774-black-ops-4-pre-order.jpg',developer: "Treyarch", release_date: Date.new(2018,10,12), esrb: 'Mature'},
 {name: 'Hearthstone', description: 'the fast-paced strategy card game that\'s easy to learn and massively fun.', promo_image_url: 'https://d2q63o9r0h0ohi.cloudfront.net/images/fb-share/facebook-share-default-04812acb25dba13239f3dbe52750ff0f4ae58cc52b5924e7cf6ffea5e1b8993d4f07bb5918b25cb9f8bb8f626f694e20e579f8eb50a43de1c1fd2fc1d6c81a60.jpg', developer: 'Blizzard Entertainment', release_date: Date.new(2014,3,11), esrb: 'Teen'},
 {name: 'Rise of the Tomb Raider', description: 'Featuring epic, high-octane action moments set in the most beautifully hostile environments on earth, Rise of the Tomb Raider delivers a cinematic survival action adventure where you will join Lara Croft on her first tomb raiding expedition.', promo_image_url: 'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcYyT3KivwvSkmDeOtfWHbfvsHJ9C1ABg.gtELYM.Dwv0iud4kxpftZngh5z7Zzj_Dcys14SRLPcYxVoNT06MeRYjnj_1VQ3gbDbTEK3b95EhW2PPOqwtCUe65doZA6DucLQznd4XtTem99fH_HGlvzHgJ9Rt2pGtYTs1OADpRqMg-&h=1080&w=1920&format=jpg', developer: 'Square Enix', release_date: Date.new(2016,2,9), esrb: 'Mature'},
 {name: 'The Witcher 3: Wild Hunt', description: ' is a story-driven, next-generation open world role-playing game, set in a visually stunning fantasy universe, full of meaningful choices and impactful consequences. You play as Geralt of Rivia, a monster hunter tasked with finding a child from an ancient prophecy.', promo_image_url: 'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcAL_uXqNGDhlNIt0wsKBphnYi_G_lNgvWGjm1ZpEzt6TkkxxY.LRNFMUxnhnMOhXnjRozIBKYKLOBejAj_dr1i69PO75wPtD1ojRri2ZdwavEkY4_hmp0LlQ5YoqPb0wxWl.NDz9XFiWiWw2pCRQmcJm_aLKubcs8Bap7r4_ju9k-&h=1080&w=1920&format=jpg', developer: 'CD Projekt RED', release_date: Date.new(2015,5,19), esrb: 'Mature'}
]

game_attributes.each do |attribute|
  Game.create(attribute)
end

user_attributes = [
  {email: 'Donnie@gmail.com', username: "DonnieIsAwesome", birthday: Date.new(1995,2,3), first_name: "Donnie", last_name: "Waite", password: 'godsdogs', password_confirmation: 'godsdogs'},
  {email: 'Kentaro@gmail.com', username: "Kentaro", birthday: Date.new(1975,5,7), first_name: "Kentaro", last_name: "Kaneki", password: 'godsdogs', password_confirmation: 'godsdogs'},
  {email: 'Richard@gmail.com', username: "RichardForFifa", birthday: Date.new(1995,12,3), first_name: "Richard", last_name: "Holway", password: 'godsdogs', password_confirmation: 'godsdogs'},
  {email: 'Harry@gmail.com', username: "Dragon", birthday: Date.new(1999,12,12), first_name: "Harry", last_name: "Johnson", password: 'godsdogs', password_confirmation: 'godsdogs'}
]

user_attributes.each do |attribute|
  User.create(attribute)
end


review_attributes = [
  {title: 'Great game!', body: 'I had so much fun playing this game with friends. The graphics were swell and it made us happy', score: 10, game_id: 1, user_id: 1 },
  {title: 'Terrible game', body: 'I was so mad after I bought this game. The graphics were so bad it was unplayable.', score: 1, game_id: 2, user_id: 2},
  {title: 'NOOOO', body: 'NOOOOOOOO THIS GAME SUCKS!', score: 1, game_id: 3, user_id: 3 },
  {title: 'My mom', body: 'Wish my mom would play this with me. Minus 4 points for not being able get her to play.', score: 6, game_id: 2, user_id: 1 },
  {title: 'When?', body: 'When is the game coming out??', score: 1, game_id: 3, user_id: 2 },
  {title: 'Finished it!', body: 'Loved the game! Finished it already! Cannot wait till the next one comes out', score: 10, game_id: 1, user_id: 3 },
  {title: 'Food?', body: 'French toast?', score: 10, game_id: 3, user_id: 1 },
  {title: '$$$', body: 'I am so done with this game! It is pay to win!', score: 3, game_id: 1, user_id: 2 },
  {title: 'Old one is better.', body: 'I liked the old one better. The feel has changed and I do not like that', score: 6, game_id: 2, user_id: 3 },
  {title: 'Toxic Teams', body: 'Toxic teams, otherwise 10.', score: 7, game_id: 1, user_id: 4 },
  {title: 'Terrible', body: 'Same game every year.', score: 1, game_id: 2, user_id: 4 },
  {title: 'Changed EVEYTHING!', body: 'Back to its roots, like the good old days.', score: 8, game_id: 3, user_id: 4 },
]

review_attributes.each do |attribute|
  Review.create(attribute)
end
