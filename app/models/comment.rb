class Comment < ApplicationRecord
  validates :user_id, presence: true
  validates :content, presence: true,length:{maximum:100}

  has_many :user
  has_many :topics
end
