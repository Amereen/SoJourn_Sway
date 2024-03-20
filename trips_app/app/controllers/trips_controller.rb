# app/controllers/trips_controller.rb
class TripsController < ApplicationController
  before_action :set_trip, only: [:update, :destroy]

  # GET /trips
  def index
    @trips = current_user.trips.includes(:destination, :activity)
    render json: @trips, include: [:destination, :activity]
  end

  # POST /trips
  def create
    @trip = current_user.trips.new(trip_params)
    if @trip.save
      render json: @trip, status: :created
    else
      render json: @trip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trips/1
  def update
    if @trip.update(trip_params)
      render json: @trip
    else
      render json: @trip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /trips/1
  def destroy
    @trip.destroy
    render json: { status: 'Trip deleted successfully' }, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trip
      @trip = current_user.trips.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trip_params
      params.require(:trip).permit(:title, :start_date, :end_date, :destination_id, :activity_id)
    end
end
  