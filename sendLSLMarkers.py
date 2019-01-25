#!/usr/bin/env python3
# This code uses pylsl to open an LSLMarker connection and send markers. It 
# receives the markers from Supercollider by using pyOSC to set up a OSCServer
# listening on port 7110. Supercollider then sends messages to this port.

from OSC import OSCServer
import sys
from time import sleep

from pylsl import StreamInfo, StreamOutlet

server = OSCServer( ("localhost", 7110) )
server.timeout = 0
run = True

# Make your pylsl connection
info = StreamInfo('LSL Marker Stream', 'Markers', 1, 0, 'string', 'myuidw43536')

# next make an outlet
outlet = StreamOutlet(info)

# this method of reporting timeouts only works by convention
# that before calling handle_request() field .timed_out is 
# set to False
def handle_timeout(self):
    self.timed_out = True

# funny python's way to add a method to an instance of a class
import types
server.handle_timeout = types.MethodType(handle_timeout, server)


def user_callback(path, tags, args, source):
    # which user will be determined by path:
    # we just throw away all slashes and join together what's left
    #print "hello"
    msg = args[0]
    print msg
    outlet.push_sample([str(msg)])

server.addMsgHandler( "/OSC-Marker-Stream", user_callback )

def quit_callback(path, tags, args, source):
    # don't do this at home (or it'll quit blender)
    global run
    run = False

# user script that's called by the game engine every frame
def each_frame():
    # clear timed_out flag
    server.timed_out = False
    # handle all pending requests then return
    while not server.timed_out:
        server.handle_request()

# simulate a "game engine"
while run:
    sleep(0.001)
    each_frame()

server.close()
