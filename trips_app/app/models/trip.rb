class Trip < ApplicationRecord
  # Associations
  belongs_to :user
  belongs_to :destination
  belongs_to :activity

  # Validations
  validates :start_date, presence: true
  validates :end_date, presence: true
end
