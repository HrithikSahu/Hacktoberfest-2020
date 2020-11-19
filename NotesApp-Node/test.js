/* var player = require('play-sound')(opts = {})
 
// $ mplayer foo.mp3 
player.play('./response.mp3', function(err){
  if (err) throw err
})
 
 */
/* const play = require('audio-play');
const load = require('audio-loader');
 
load('response.mp3').then(play); */


const sound = require('sound-play')
try{
    sound.play('C:\\Users\\smathur7\\Downloads\\Node-Study\\notesapp\\response.mp3')
}
catch(e){
    console.log('ex '+e)
}