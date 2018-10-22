# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

game_attributes = [
  {name: 'Overwatch', description: 'Overwatch is a team-based multiplayer first-person shooter', promo_image_url: 'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc6j8bTV3N2m4CBQKAT1cS6lUOQX.ngdSgiLRMdAu32DtzDJKUuzN1aOTJPFi7RvCaG_JZJBF7TU37nEBObS0xnS6oexMnX_VmFbdu1_AVM3gPqcljwPx9mL3nBEEGiHRvwz1VPBNPlVPoJ.39_fHs1EepEJunV8KgSqlTbNGimJs-&h=1080&w=1920&format=jpg',
  year: '2016', esrb: 'T' },
  {name: 'FIFA 19', description: 'FIFA 19 is a soccer game simulator', promo_image_url: 'https://orig00.deviantart.net/cd77/f/2018/236/f/7/icon_fifa_19_by_hazzbrogaming-dcl12ro.png',
  year: '2018', esrb: 'E'},
  {name: 'Call of Duty: Black Ops 4', description: 'COD Black Ops 4 is a shooting game', promo_image_url: 'https://orig00.deviantart.net/145b/f/2018/138/a/6/call_of_duty_black_ops_4___icon_by_blagoicons-dcbu90s.png',
  year: '2018', esrb: 'M'}
]

game_attributes.each do |attributes|
  Game.create(attributes)
end
