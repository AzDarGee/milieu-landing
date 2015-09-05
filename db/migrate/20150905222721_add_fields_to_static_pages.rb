class AddFieldsToStaticPages < ActiveRecord::Migration
  def change
  	# drop_table :addresses
  	# drop_table :comments
  	# drop_table :devapps
  	# drop_table :sites
  	# drop_table :static_pages
  	# drop_table :statuses
  	# drop_table :users
  	create_table :static_pages do |t|
      t.string :email
      t.string :name
      t.string :number
      t.text :comment

      t.timestamps null: false
    end
  end
end
