class StaticPagesController < ApplicationController
  def landing
  	@user = StaticPage.new
  end

  def french
    @user = StaticPage.new
  end

  def splash
  end

  def create
  	@user = StaticPage.new(static_pages_params)
    if @user.save
      redirect_to root_path, notice: "Thanks! You will recieve an invite to the launch party."
    else
      redirect_to root_path, alert: "Invalid email, try again."
    end
  end

  private
  	def static_pages_params
  		params.require(:static_page).permit(:name,:email,:number,:comment)
  	end
end
