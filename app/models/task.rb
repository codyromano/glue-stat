class Task < ApplicationRecord
  validates :title, presence: true, length: { maximum: 50 }
  validates :time_completed, presence: true
end
