ActiveAdmin.register Post do

  
  # See permitted parameters documentation:
  # https://github.com/gregbell/active_admin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  permit_params :title, :description, :image, :date, :content, :author_id, :category_id, :avatar
  #
  # or
  #
  # permit_params do
  #  permitted = [:permitted, :attributes]
  #  permitted << :other if resource.something?
  #  permitted
  # end
  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Post" do
      f.input :title
      f.input :description
      f.input :avatar, :as => :file
      f.input :date, :as => :date_picker
      f.input :content
      f.input :author_id, :label => 'Autor', :as => :select, :collection => Author.all.map{|author| ["#{author.name}", author.id]}
      f.input :category_id, :label => 'Categoria', :as => :select, :collection => Category.all.map{|category| ["#{category.name}", category.id]}
    end
    f.actions
  end
  
end
