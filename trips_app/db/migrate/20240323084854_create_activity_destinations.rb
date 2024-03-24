class CreateActivityDestinations < ActiveRecord::Migration[7.1]
  def change
    create_table :activity_destinations do |t|
      t.references :destination, foreign_key: true
      t.references :activity, foreign_key: true

      t.timestamps
    end
  end
end

