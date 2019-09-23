class Api::ProfilesController < ApplicationController
  before_action :set_profile, only: [:show, :update, :destroy]
  
  def index
    render json: Profile.all
  end

  def show
    render json: @profile 
  end

  def create
    profile = Profile.new(profile_params)
    if profile.save
      render json: profile
    else
      render json: profile.errors
    end
  end

  def update
    if @profile.update(profile_params)
      render json: @profile
    else
      render json: @profile.errors
    end
  end

  def destroy
    @profile.destroy
  end

  private

  def set_profile
    @profile = Profile.find(params[:id])
  end

  def profile_params
    params.require(:profile).permit(:name)
  end
end
