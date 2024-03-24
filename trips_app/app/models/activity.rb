class Activity < ApplicationRecord
  # Associations
  has_many :trips, dependent: :destroy
  has_many :activity_destinations, dependent: :destroy
  has_many :destinations, through: :activity_destinations
  belongs_to :user

  # Validations
  validates :name, presence: true
  validates :description, presence: true
end