from mapApp import app
from flask import request
from geopy.geocoders import Nominatim
import folium
import os

@app.route('/')
def serve():
    return app.send_static_file('index.html')

# def name():
#     return render_template("index.html")

@app.route('/getCity', methods = ["GET", "POST"])
def cityName():
    if request.method == "POST":
        cityNames = request.json["cityNames"]
        print(cityNames)
        getCoordinates(cityNames)
    return {"data":"recieved"}

def getCoordinates(cityNames):
    geolocator = Nominatim(user_agent="mapApp")
    locationList = []
    cityNames = cityNames.strip().split(",")
    for i in cityNames:
        locationAddress = geolocator.geocode(i.strip())
        locationList.append(locationAddress[1])
    print(locationList)
    plotMap(locationList)

def plotMap(locationList):

    m = folium.Map(location=[20, 0], zoom_start=3)
    for i in locationList:
        folium.Marker(i,icon=folium.Icon(color='green', icon='ok')).add_to(m)
    m.save("./build/map.html")
