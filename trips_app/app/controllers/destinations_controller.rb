class DestinationsController < ApplicationController
  before_action :authorized, except: [:index]
  before_action :set_destination, only: [:update, :destroy]

  # GET /destinations
  def index
    @destinations = Destination.all
    render json: @destinations
  end

  # POST /destinations
  def create
    @destination = Destination.new(destination_params)
    if @destination.save
      render json: @destination, status: :created
    else
      render json: @destination.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /destinations/1
  def update
    if @destination.update(destination_params)
      render json: @destination
    else
      render json: @destination.errors, status: :unprocessable_entity
    end
  end

  def get_associated_activities
    @destination = Destination.find(params[:id])
    @associeted_destinations = @destination.activities
    render json: @associeted_destinations
  end

  # DELETE /destinations/1
  def destroy
    @destination.destroy
    render json: { status: 'Destination deleted successfully' }, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_destination
      @destination = Destination.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def destination_params
      params.require(:destination).permit(:name, :description)
    end
end
