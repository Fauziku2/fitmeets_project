class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :event_date
      t.string :start_time
      t.string :end_time
      t.string :event_address
      t.integer :postal_code
      t.integer :players_req
      t.string :sports_cat
      t.string :event_name
      t.text :details
      t.string :picture
      t.integer :creator_id
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
