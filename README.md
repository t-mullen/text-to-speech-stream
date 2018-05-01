# text-to-speech-stream

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Simple text-stream wrapper around the WebSpeech SpeechSynthesizer API for Google Chrome.

Also see [speech-to-text-stream](https://github.com/RationalCoding/speech-to-text-stream).

## Usage

```javascript
TextToSpeechStream.getVoices() // Return all voice objects
var voice = TextToSpeechStream.getVoiceByName("Alex")

var synthesizer = new TextToSpeechStream({
  voice: voice,
  pitch: 1,
  rate: 1
})

synthesizer.write("Hello world!")
```

