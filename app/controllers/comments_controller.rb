class CommentsController < ApplicationController
      def new
        #binding.pry
        @comment = Comment.new
        @comment.topic_id = params[:topic_id]
      end

      def create
         # binding.pry
         @comment = current_user.comments.new(comments_params)
          if @comment.save
            redirect_to topics_path, success: '投稿に成功しました'
          else
            flash.now[:danger] = "投稿に失敗しました"
            render :new
          end
      end

private
      def comments_params
        params.require(:comment).permit(:content, :topic_id)
      end
end
