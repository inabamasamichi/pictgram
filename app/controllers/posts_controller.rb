class PostsController < ApplicationController
  def show
    @post = Post.find_by(slug:params[:slug])
    @comment = @post.comments.build
  end
end
