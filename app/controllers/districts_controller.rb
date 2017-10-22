class DistrictsController < ApplicationController
  def progress
    district_key = params[:id]
    render json: {
      district_key: district_key,
      students: IO.read('/Users/krobinson/Desktop/students.json')
    }
  end
end
