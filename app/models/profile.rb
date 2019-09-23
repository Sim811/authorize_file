class Profile < ApplicationRecord
  has_many :posts, dependant: :destroy
end
