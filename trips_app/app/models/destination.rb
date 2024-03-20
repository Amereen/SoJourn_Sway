class Destination < ApplicationRecord
  # Associations
  has_many :trips, dependent: :destroy

  # Validations
  validates :name, presence: true
  validates :description, presence: true
end
