class CreateAddForiegnKeysToRides < ActiveRecord::Migration[5.0]
  def change
    create_table :add_foriegn_keys_to_rides do |t|
      t.integer :passenger_id
      t.integer :taxi_id

      t.timestamps
    end
  end
end
