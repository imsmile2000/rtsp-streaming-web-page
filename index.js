Stream = require('node-rtsp-stream')
stream = new Stream({
	name: 'name',
	streamUrl: 'rtsp://localhost:8123/ds-test',
	wsPort: 9999,
    fps: '30',
	ffmpegOptions: { // options ffmpeg flags
		'-stats': '', // an option with no neccessary value uses a blank string
		'-r': 30 // options with required values specify the value after the key
	}
})