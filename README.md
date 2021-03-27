# Voyager
A travel itinerary visualizer that plots your destinations on a map.

# Try it out
Head [here](https://tatirajurishabh.github.io/voyager/) for a working demo.

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
- [ ] Change home city
- [ ] Export and import data
- [ ] Destination notekeeping
- [ ] Sub-destinations

# Screenshots
![](https://i.postimg.cc/rpfs0DNK/voyager1.png)
![](https://i.postimg.cc/Y9VSRTV7/voyager2.png)
![](https://i.postimg.cc/yWC84csr/voyager3.png)

# Credits
- Anushka Ramteke, the *optimis optimus*, for the endless travel talks and our collective love to travel that inspired me to make this! She's also the person to credit for the color schemes used here.
- [Akash Joshi](https://github.com/akash-joshi), for inardavently  introducing me to React. His React articles have been a lot of help too!
- My beloved late father, for buying me an atlas when I was 6 years old, something that led me develop an obsession towards geography and cartography.
- The folks at [Webloom Inc](https://webloominc.com), my previous employer, for pushing me into React and React Native.

# License
The MIT License (MIT)
  
Copyright © 2021 Rishabh Tatiraju

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
