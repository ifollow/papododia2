class AddContent2ToPost < ActiveRecord::Migration
  def change
    add_column :posts, :content2, :text
  end
end
