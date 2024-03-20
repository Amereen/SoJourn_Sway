# app/controllers/activities_controller.rb
class ActivitiesController < ApplicationController
  before_action :set_activity, only: [:update, :destroy]

  # GET /activities
  def index
    @activities = current_user.activities
    render json: @activities
  end

  # POST /activities
  def create
    @activity = current_user.activities.new(activity_params)

    if @activity.save
      render json: @activity, status: :created
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /activities/1
  def update
    if @activity.update(activity_params)
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
