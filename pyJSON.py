# Importing json library
import json

# Create data object
data1 = {
    'name':'OJ',
    'age':30,
    'city':'New York, NY',
    'interests':['Traveling','Football','Golf'],
    'is_student': True

}

#Creating a Json and writing the python object contents to the json
with open('data1.json','w') as json_file:
    json.dump(data1,json_file,indent=4)

print("Data has been writen to data1.json")