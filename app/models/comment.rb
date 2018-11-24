class Comment < ApplicationRecord
  validates :user_id, presence: true
  belongs_to :user
  has_many :topics
end
