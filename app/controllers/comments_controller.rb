class CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end



  def create
    @comment = current_user.comments.new topic_params
    if @comment.save
      redirect_to topics_path, success: '投稿に成功しました'
    else
      flash.now[:danger] = "投稿に失敗しました"
      logger.debug(@comment.inspect)
      render :new
    end
  end

  private
    def topic_params
      params.require(:comment).permit(:image, :description)
    end
end
