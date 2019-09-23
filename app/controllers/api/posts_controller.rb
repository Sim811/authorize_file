class Api::PostsController < ApplicationController
  before_action :set_profile, only: [:show, :update, :destroy]
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: @profile.posts
  end

  def show
    render json: @post
  end

  def create
    post = @profile.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors
    end
  end

  def destroy
    @post.destroy
  end

  private

  def set_profile
    @profile = Profile.find(params[:profile_id])
  end

  def set_post
    @post = @profile.posts.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:body)
  end
end
