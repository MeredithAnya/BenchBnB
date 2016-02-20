class Bench < ActiveRecord::Base
	validates :description, :lat, :log, presence: true
	
end
