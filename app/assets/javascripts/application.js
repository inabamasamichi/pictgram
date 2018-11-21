// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//comments/create.js,erb
<% if @comment.parent_id %>
 $comment_parent = $("#comment_<%=@comment.parent_id %>")
$comment_form = $("#comment_<%= @comment.parent_id %> #new_comment");
<% else %>
 $comment_parent = $("#comment-wrap");
 $comment_form = $("#new_comment");
<% end %>
<% if @comment.errors.empty? %>
 $comment_parent.append("<%=j(render partial:'comments/comment',locals:{post:@post,comment:@comment}) %>");
 $comment_form[0].reset();
 <% if @comment.parent %>
 $comment_form.remove();
 <% end %>
 <% else %>
 $comment_form.before("<div class='alert alert-warning alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><ul><% @comment.errors.full_messages.each do |message| %><li><%= message %></li><% end %> </ul></div>").prev().delay(1500).slideUp();
<% end %>
//comments/destroy.js.erb
$comments_count = $("#comments-count-of-post");
<% if @comment.errors.empty? %>
$comments_count.html("<%= @post.comments.count %>");
 $("#comment_<%= @comment.id %>").fadeOut(400);
 <% else %>
 $("#comment_<%= @comment.id %>").after("<div class='request-error'><%= @comment.errors.full_messages.join('') %></div>").next().delay(1500).slideUp('fast');
 <% end %>

//comments/edit.js.erb
<% if @comment.errors.empty? %>
 $("#comment_<%= @comment.id %> > .comment-content > .comment-info .edit-comment-link").removeAttr("href");
 $("#comment_<%= @comment.id %> > .comment-content > .comment-info").after("<%=j render('comments/form', {comment: @comment,post:@post}) %>");
<% else %>
 $("#comments-widget-of-commentable-<%= @commentable.id %> .comments-header").after("<div class='alert alert-warning alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><%= @comment.errors.full_messages.join('') %></div>").next().delay(1500).slideUp('fast');
<% end %>

//comments/reply.js.erb
<% if @comment.errors.empty? %>
 $("#comment_<%= @comment.id %> > .comment-content > .comment-info .reply-comment-link").removeAttr("href");
 $("#comment_<%= @comment.id %> > .comment-content > .comment-info").after("<%=j render('comments/form', {comment: @reply,post:@post}) %>");
<% else %>
 $("#comment_<%= @comment.id %> .comments-header").after("<div class='alert alert-warning alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><%= @comment.errors.full_messages.join('') %></div>").next().delay(1500).slideUp('fast');
<% end %>

//comments/update.js.erb
$comment_form = $("#comment_<%=@comment.id %> .new_comment");
$comment = $("#comment_<%= @comment.id %>");
<% if @comment.errors.empty? %>
$comment.html("<%=j render("comments/comment",{comment: @comment,group:@group,post:@post}) %>");
$comment_form[0].remove();
<% else %>
 $comment_form.before("<div class='alert alert-warning alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><ul><% @comment.errors.full_messages.each do |message| %><li><%= message %></li><% end %> </ul></div>").prev().delay(1500).slideUp();
<% end %>
