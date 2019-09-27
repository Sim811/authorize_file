100.times do
 u = User.create(
   email: Faker::Internet.free_email,
   password: Faker::Internet.password,
 )
  15.times do
  u.posts.create(
    title: Faker::Book.title,
    body: Faker::Hacker.say_something_smart,
  )
  end
end

puts "File Seeded"