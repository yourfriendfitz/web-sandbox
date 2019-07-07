import googlemaps
from datetime import datetime

gmaps = googlemaps.Client(key='enter-api-key-here')

# Geocoding an address
# geocode_result = gmaps.geocode('1600 Amphitheatre Parkway, Mountain View, CA')

# # Look up an address with reverse geocoding
# reverse_geocode_result = gmaps.reverse_geocode((40.714224, -73.961452))

# Request directions via public transit
now = datetime.now()
directions_result = gmaps.directions("H-E-B, 10251 Kempwood Dr, Houston, TX 77043",
                                     "Whataburger, 2429 Gessner Rd, Houston, TX 77080",
                                     mode="walking",
                                     departure_time=now)

html_instructions = []


for array in directions_result:
    for item in array["legs"]:
        for step in item["steps"]:
            html_instructions.append(step["html_instructions"])

print(html_instructions)
