# app/controllers/activities_controller.rb
class ActivitiesController < ApplicationController
  before_action :set_activity, only: [:update, :destroy]

  # GET /activities
  def index
    @activities = Activity.all
    render json: @activities
  end

  # POST /activities
  def create
    @activity = current_user.activities.new(activity_params)
  
    if @activity.save
      ActivityDestination.create(activity_id: @activity.id, destination_id: params['activity']['destination_id'].to_i)
      render json: @activity, status: :created
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /activities/1
  def update
    @activity_destination = ActivityDestination.find_by_activity_id(@activity.id)
    if @activity.update(activity_params)
      @activity_destination.update(destination_id: params['destination_id'])
      render json: @activity
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  # DELETE /activities/1
  def destroy
    @activity.destroy
    render json: { status: 'Activity deleted successfully' }, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activity
      @activity = current_user.activities.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def activity_params
      params.require(:activity).permit(:name, :description)
    end
end
