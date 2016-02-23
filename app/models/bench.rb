class Bench < ActiveRecord::Base
	validates :description, :lat, :log, presence: true

	def self.in_bounds(bounds)
		ne_lat = bounds["northEast"]["lat"]
		ne_lng = bounds["northEast"]["lng"]
		sw_lat = bounds["southWest"]["lat"]
		sw_lng = bounds["southWest"]["lng"]

		 
		Bench.where("lat < ? AND lat > ? AND log < ? AND log > ?", ne_lat, sw_lat, ne_lng, sw_lng) 
	end
	
end
