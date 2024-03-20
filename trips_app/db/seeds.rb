# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Clear out existing records to avoid duplicates when re-seeding
Destination.destroy_all

# Create six destination records
Destination.create([
  { name: 'Paris', description: 'The city of love and lights' },
  { name: 'Tokyo', description: 'Vibrant metropolis with rich culture' },
  { name: 'New York City', description: 'The Big Apple - bustling and diverse' },
  { name: 'Rome', description: 'Eternal city with ancient history' },
  { name: 'Sydney', description: 'Harbor city with iconic landmarks' },
  { name: 'Cape Town', description: 'Beautiful coastal city with Table Mountain' }
])

puts "Destination records created successfully!"
