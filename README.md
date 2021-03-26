# Voyager
A travel itinerary visualizer that plots your destinations on a map.

# Try it out
Head [here](https://tatirajurishabh.github.io/voyager/) for a working demo.

# Libraries in use:
- [React.js](https://github.com/facebook/react) using which Voyager is built.
- [React Leaflet](https://github.com/PaulLeCam/react-leaflet) allowing easy access to the powerful [Leaflet.js](https://github.com/Leaflet/Leaflet) mapping library.
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) which made UI building hassle-free.
- [React Bootstrap Typeahead](https://github.com/ericgio/react-bootstrap-typeahead) for easy implementation of search bars.
- [Turfjs Bezier Spline](https://github.com/Turfjs/turf) which makes drawing airplane paths easy.
- [React Context Hook](https://github.com/Spyna/react-context-hook) for effortless global state management.

# Data storage
The web app has no data transfer involved whatsoever, except for loading the map data when you're moving and zooming around. This is achieved by storing data in the browser's local storage. Hence, clearing browser data will result in all data to be permanently erased. So, tread cautiously. A backup and restore feature will be implemented soon.

# To-do
- [ ] Mobile interface
- [ ] Change home city
- [ ] Export and import data
- [ ] Destination notekeeping
- [ ] Sub-destinations

# Screenshots
![](https://i.postimg.cc/rpfs0DNK/voyager1.png)
![](https://i.postimg.cc/Y9VSRTV7/voyager2.png)
![](https://i.postimg.cc/yWC84csr/voyager3.png)

# Credits
- Anushka Ramteke, for the endless travel talks that inspired me to make this, and for the color schemes!
- [Akash Joshi](https://github.com/akash-joshi), for his React articles which have been a lot of help.
- The folks at [Webloom Inc.](https://webloominc.com), my previous employers, for pushing me into React.js.  

# License
The MIT License (MIT)
  
Copyright © 2021 Rishabh Tatiraju

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
