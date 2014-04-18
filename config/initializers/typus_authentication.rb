Typus.setup do |config|

  # Define authentication: +:none+, +:http_basic+, +:session+
  config.authentication = :http_basic
  
  config.username = "admin"
  config.password = "delicia"
  # Define master_role.
  config.master_role = "admin"

  # Define relationship.
  # config.relationship = "typus_users"

  # Define user_class_name.
  config.user_class_name = "TypusUser"

  # Define user_foreign_key.
  config.user_foreign_key = "typus_user_id"

end
