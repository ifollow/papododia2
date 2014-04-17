class Post < ActiveRecord::Base
  belongs_to :author
  belongs_to :category
  #mount_uploader :image, ImageUploader
  has_attached_file :avatar, :styles => {:thumb => "293x356>", :banner => "1000x580>"}
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
end
