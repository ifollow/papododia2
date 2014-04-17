class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.text :content
      t.date :date
      t.string :image
      t.references :author, index: true
      t.references :category, index: true

      t.timestamps
    end
  end
end
