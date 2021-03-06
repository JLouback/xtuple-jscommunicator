
JSCommSettings = {

  // Web server environment
  webserver: {
    url_prefix: null            // If set, prefix used to construct sound/ URLs
  },

  // STUN/TURN media relays
  stun_servers: [],
  turn_servers: [
    // Specify a TURN server without credentials and it will use the SIP credentials:
    { server:"turn:debrtc.org" }     

  ],

  // WebSocket connection
  websocket: {
    servers: 'wss://ws.sip5060.net',
    connection_recovery_min_interval: 2,
    connection_recovery_max_interval: 30,
  },

  // User identity
  // If uri == null or sip_auth_password == null the user will be
  // greeted with the login box
  // If sip_auth_user == null, it will be automatically derived from
  // the value of uri
  user: {
    display_name: 'Your Name',
    uri: 'sip:YOU@debrtc.org',
    sip_auth_user: null,
    sip_auth_password: null,
    sip_auth_user_full_uri: false,   // Whether to use full URI or just
                                    // the user part to construct the auth user
  },

  // User SIP registration
  registration : {
    on_startup: true,          // Register when websocket link starts?
    expiry: 300,              // Registration expiry (seconds)
    user_control: true,        // Show button for user to (de)register
    server: null,              // Registration server
  },

  dialing : {
    auto_dial : {
      default_destination : '',  // A name or full URI
      on_startup: false,           // Whether to wait for user to click dial
      use_video: true,            // Whether to auto-dial with video
    },
    edit_destination: true,      // Whether the user may edit the destination
    show_destination: true,      // Whether the user can see the destination
    audio_dialing: true,         // Whether to offer an audio call button
    video_dialing: true,         // Whether to offer a video call button
    prefer_video: true,         // If user presses Enter to dial, use video?
    no_answer_timeout: 60,       // How long to wait for answer (seconds)
    clear_dialbox: false,          // Whether to clear dialbox after call/attempted call
  },

  session : {
    enable_chat: true,  
    show_dtmf_pad : true,        // Whether to show a DTMF dialpad during calls
    dtmf_duration: 160,
    dialpad_tone: true,
    require_relay_candidate: false
  },
    
   i18n : {
    translate: true,     // enables the call to i18n init function from JSCommManager.init()
    show_menu: true,    // show the language chooser menu
    default_lang: 'pt',   // default language to use
   },

  extra_headers : [
    // 'X-WS-Session-Extra: some_token=value'
    'X-Super-Cow: power'
  ],

};


/****************************************************************************
 JSCommunicator
 http://jscommunicator.org

 Copyright (C) 2013  Daniel Pocock http://danielpocock.com

 The JavaScript code in this page is free software: you can
 redistribute it and/or modify it under the terms of the GNU
 General Public License (GNU GPL) as published by the Free Software
 Foundation, either version 2 of the License, or (at your option)
 any later version.  The code is distributed WITHOUT ANY WARRANTY;
 without even the implied warranty of MERCHANTABILITY or FITNESS
 FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

 You may distribute non-source (e.g., minimized or compacted) forms of
 that code without the full copy of the GNU GPL normally required
 provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.
****************************************************************************/

