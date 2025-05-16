const showMyFaceButton = document.querySelector('#start')
const showFriendsFaceButton = document.querySelector('#receiver')
const showMyFaceVideo = document.querySelector('#emitter-video')
const showFriendsFaceVideo = document.querySelector('#receiver-video')

const offerTextarea = document.querySelector('#offer')

const yourId = Math.floor(Math.random() * 1000000000)

let p = null

import { } from 'firebase/database';

function readMessage(data) {
  const msg = JSON.parse(data.val().message)
  const sender = data.val().sender

  if (sender != yourId) {
    console.log(msg)
    if (p === null) {
      p = new SimplePeer({
        initiator: false,
        config: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
            { urls: 'stun:stun.services.mozilla.com' },
            { urls: 'turn:turn.cloudflare.com:3478' }
          ],
        },
      })
      bindEvents(p)
    }
    p.signal(msg)
  }
}

function bindEvents(p) {
  p.on('error', err => {
    console.log(err)
  })

  p.on('signal', data => {
    const msg = database.push({
      sender: yourId,
      message: JSON.stringify(data),
    })

    msg.remove()
  })

  p.on('stream', stream => {
    console.log('streaming')
    console.log(stream)
    showFriendsFaceVideo.srcObject = stream
  })
}

database.on('child_added', readMessage)

showMyFaceButton.addEventListener('click', async e => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })

    p = new SimplePeer({
      initiator: true,
      stream,
      config: {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
          { urls: 'stun:stun.services.mozilla.com' },
          { urls: 'turn:turn.cloudflare.com:3478' }
        ],
      },
    })

    bindEvents(p)
    showMyFaceVideo.srcObject = stream
  } catch (e) {
    console.log(e.message)
  }
})
