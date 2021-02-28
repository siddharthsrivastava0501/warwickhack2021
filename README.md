# Soul Food

Soul food is a cross-platform app where you can find food that you like (contributed by other people, as well as an external API) and it adds it to your profile for future reference. 

Built using React-Native, it _should_ run on both iOS and Android, however, no testing was done using Android studio, so use at your own risk. 

## Installation

1. Clone the repo
2. Go to the directory where the repo was cloned and run
```bash
npm install
```
This should install a lot of stuff.
3. If you are running iOS on a simulator:
```bash
cd ios && pod install
```
4. ```cd``` into the main folder and run ```npx react-native run-ios```
If you are running on Android, I have no idea how it works.
5. Common issues:
- Podfile issues:
Delete the ```podfile.lock``` and run ```pod install```.
- Firebase issues: contact us.
- npm issues: Delete ```package-lock.json``` and run ```npm install```.

## Technical description
We use React-Native as our front end, Firebase as our backend and ```react-native-firebase``` to communicate between the two. The app is split into multiple pages, navigation is made possible using ```react-navigation```. Some of the components we made ourselves, however others come from ```react-native-paper``` and ```react-native-elements```. For icons, we used ```react-native-vector-icons```

The app fetches primarily from the ```themealdb``` API, however we aim to add functionality in the future where users can submit their own recipes.
The JSON is parsed and the recipe is rendered on screen. If the user likes the recipe, it is added to their saved recipes, if not it is simply discarded for a new recipe. 

## Video
[YouTube](https://youtu.be/BJo4mL2fGrY)
 
## License
[MIT](https://choosealicense.com/licenses/mit/)
