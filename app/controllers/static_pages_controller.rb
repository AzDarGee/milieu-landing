class StaticPagesController < ApplicationController
  def landing
  	@user = StaticPage.new
  end

  def create
  	@user = StaticPage.new(static_pages_params)
    if @user.save
      redirect_to root_path, notice: 'Your account was successfully created.'
    else
      redirect_to root_path, alert: "Try again"
    end
  end

  private
  	def static_pages_params
  		params.require(:static_page).permit(:email)
  	end
end
