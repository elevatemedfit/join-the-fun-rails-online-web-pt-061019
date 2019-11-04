class CreateAdds < ActiveRecord::Migration[5.0]
  def change
    create_table :adds do |t|
      t.string :Foriegn
      t.string :Keys
      t.string :To
      t.string :Ride
      t.integer :passenger_id
      t.integer--no-test-framework :taxi_id

      t.timestamps
    end
  end
end
