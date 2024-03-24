class Destination < ApplicationRecord
  # Associations
  has_many :trips, dependent: :destroy
  has_many :activity_destinations, dependent: :destroy
  has_many :activities, through: :activity_destinations

  # Validations
  validates :name, presence: true
  validates :description, presence: true
end

