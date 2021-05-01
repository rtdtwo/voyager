# Voyager
A travel itinerary visualizer that plots your destinations on a map.

# Demo
Try Voyager: [https://tatirajurishabh.github.io/voyager/](https://tatirajurishabh.github.io/voyager/)
## Video
[![Voyager Video Thumbnail](http://img.youtube.com/vi/ALDCmG4cFy4/0.jpg)](https://www.youtube.com/watch?v=ALDCmG4cFy4)


# Libraries in use:
- [React.js](https://github.com/facebook/react) using which Voyager is built.
- [React Leaflet](https://github.com/PaulLeCam/react-leaflet) allowing easy access to the powerful [Leaflet.js](https://github.com/Leaflet/Leaflet) mapping library.
- [Chakra UI](https://github.com/chakra-ui/chakra-ui) which made UI building hassle-free.
- [Turfjs Bezier Spline](https://github.com/Turfjs/turf) which makes drawing airplane paths easy.
- [React Context Hook](https://github.com/Spyna/react-context-hook) for effortless global state management.

# Data storage
The web app has no data transfer involved whatsoever, except for loading the map data when you're moving and zooming around. This is achieved by storing data in the browser's local storage. Hence, clearing browser data will result in all data to be permanently erased. So, tread cautiously. A backup and restore feature will be implemented soon.

# To-do
- [x] Mobile interface
- [x] Download Map
- [ ] Change home city
- [ ] Export and import data
- [ ] Destination notekeeping
- [ ] Sub-destinations

# Screenshots
![](https://i.postimg.cc/rpfs0DNK/voyager1.png)
![](https://i.postimg.cc/Y9VSRTV7/voyager2.png)
![](https://i.postimg.cc/yWC84csr/voyager3.png)

# Credits
- ***Anushka Ramteke***, for the endless travel talks and our collective love to travel that inspired me to make this! She's also the person to credit for the color schemes used here.
- ***[Akash Joshi](https://github.com/akash-joshi)***, for inardavently  introducing me to React. His React articles have been a lot of help too!
- ***[Varun Joshi](https://github.com/joshvarun)***, who said *"Hey, why don't you try Chakra UI?"* on a call. He's also a close friend and a well wisher!
- ***My beloved late father***, for gifting me an atlas when I was 6 years old, something that led me to develop an obsession towards geography and cartography.

# Homage
Although this tool is in no way related to space exploration, the tool is named after *Voyager 1*, the cosmic traveler.
![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Voyager_spacecraft_model.png/320px-Voyager_spacecraft_model.png)

*Voyager 1* is the farthest man-made object from Earth. The spacecraft, now more than *22 billion km (14 billion miles)* away from us, is slated to wander the vast darkness of space for eternity. 

By 2025, its radioisotope thermoelectric generators (RTGs, a type of nuclear power generator) will no longer supply enough electric power for onboard instruments, and it will disappear from our sight forever. However, it carries a gold-plated audio-visual disc, should the spacecraft ever be found by intelligent life forms from other planetary systems. 

Quite indeed, it is boldly going where no one has ever gone before!🖖

# License
The MIT License (MIT)
  
Copyright © 2021 Rishabh Tatiraju

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
