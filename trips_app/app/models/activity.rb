class Activity < ApplicationRecord
  # Associations
  has_many :trips, dependent: :destroy
  belongs_to :user

  # Validations
  validates :name, presence: true
  validates :description, presence: true
end
