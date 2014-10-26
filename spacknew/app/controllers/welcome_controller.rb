class WelcomeController < ApplicationController
	def index
	end 

	def about
  	end

	def blog
	end 

	def press
	end 

	def shop
	end 

	def team
		@employee_images = Dir.glob("spacknew/public/images/employees/*").map do |f| File.basename f
		end 
	end 
end
