class StaticPage < ActiveRecord::Base
	validates :my_email_attribute, :email => true
end
