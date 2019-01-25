#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.0.0b10),
    on Tue Oct  9 23:21:07 2018
If you publish work using this script please cite the PsychoPy publications:
    Peirce, JW (2007) PsychoPy - Psychophysics software in Python.
        Journal of Neuroscience Methods, 162(1-2), 8-13.
    Peirce, JW (2009) Generating stimuli for neuroscience using PsychoPy.
        Frontiers in Neuroinformatics, 2:10. doi: 10.3389/neuro.11.010.2008
"""

from __future__ import absolute_import, division
from psychopy import locale_setup, sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)
import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
expName = 'Experiment1'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/walterkopacz/anaconda2/envs/psychopy/conda-meta/Experiment1_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0,
    allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True)
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Initialize components for Routine "IntroText"
IntroTextClock = core.Clock()
Introtext = visual.TextStim(win=win, name='Introtext',
    text='(insert intro text here)',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "HeartBeats"
HeartBeatsClock = core.Clock()
heart = sound.Sound("'heart120.wav'", secs=-1, stereo=True)
heart.setVolume(1)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "IntroText"-------
t = 0
IntroTextClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
introkey = event.BuilderKeyResponse()
# keep track of which components have finished
IntroTextComponents = [Introtext, introkey]
for thisComponent in IntroTextComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "IntroText"-------
while continueRoutine:
    # get current time
    t = IntroTextClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Introtext* updates
    if t >= 0.0 and Introtext.status == NOT_STARTED:
        # keep track of start time/frame for later
        Introtext.tStart = t
        Introtext.frameNStart = frameN  # exact frame index
        Introtext.setAutoDraw(True)
    
    # *introkey* updates
    if t >= 0.0 and introkey.status == NOT_STARTED:
        # keep track of start time/frame for later
        introkey.tStart = t
        introkey.frameNStart = frameN  # exact frame index
        introkey.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(introkey.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if introkey.status == STARTED:
        theseKeys = event.getKeys(keyList=['space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            introkey.keys = theseKeys[-1]  # just the last key pressed
            introkey.rt = introkey.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in IntroTextComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "IntroText"-------
for thisComponent in IntroTextComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if introkey.keys in ['', [], None]:  # No response was made
    introkey.keys=None
thisExp.addData('introkey.keys',introkey.keys)
if introkey.keys != None:  # we had a response
    thisExp.addData('introkey.rt', introkey.rt)
thisExp.nextEntry()
# the Routine "IntroText" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "HeartBeats"-------
t = 0
HeartBeatsClock.reset()  # clock
frameN = -1
continueRoutine = True
routineTimer.add(15.000000)
# update component parameters for each repeat
heart.setSound("'heart120.wav'", secs=15.0)
heart.setVolume(1, log=False)
# keep track of which components have finished
HeartBeatsComponents = [heart]
for thisComponent in HeartBeatsComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "HeartBeats"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = HeartBeatsClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # start/stop heart
    if t >= 0.0 and heart.status == NOT_STARTED:
        # keep track of start time/frame for later
        heart.tStart = t
        heart.frameNStart = frameN  # exact frame index
        win.callOnFlip(heart.play)  # screen flip
    frameRemains = 0.0 + 15.0- win.monitorFramePeriod * 0.75  # most of one frame period left
    if heart.status == STARTED and t >= frameRemains:
        heart.stop()  # stop the sound (if longer than duration)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in HeartBeatsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "HeartBeats"-------
for thisComponent in HeartBeatsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
heart.stop()  # ensure sound has stopped at end of routine
# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
