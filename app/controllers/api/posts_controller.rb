class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:user_posts]


  def index
    render json: current_user.posts
  end

  def user_posts
    render json: @user.posts
  end

  def show
    render json: @post
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: {}      
    end
  end

  def update
  end

  def destroy
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
