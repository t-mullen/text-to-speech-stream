var test = require('tape')
var TextToSpeechStream = require('./../')

test('basic manual test', function (t) {
  var voice = TextToSpeechStream.getVoiceByName("Lee")

  var synthesizer = new TextToSpeechStream({
    voice: voice,
    pitch: 1,
    rate: 1
  })
  
  synthesizer.write("Hello world! Pending...")
  synthesizer.write("Test 1 2 3!")
  synthesizer.write("Done.")
  
  t.end()
})