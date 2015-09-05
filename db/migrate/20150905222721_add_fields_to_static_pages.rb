class AddFieldsToStaticPages < ActiveRecord::Migration
  def change

  	create_table :static_pages do |t|
      t.string :email
      t.string :name
      t.string :number
      t.text :comment

      t.timestamps null: false
    end
  end
end
