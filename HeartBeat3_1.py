#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.0.0b10),
    on Tue Dec 11 22:38:16 2018
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
expName = 'HeartBeat3'  # from the Builder filename that created this script
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
    originPath='/Users/walterkopacz/Desktop/conda-meta/HeartBeat3.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1680, 1050], fullscr=True, screen=0,
    allowGUI=True, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True)
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Initialize components for Routine "Introductory_Text"
Introductory_TextClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='(insert desired text here)\n\nPress the space bar to continue\n',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "Listening"
ListeningClock = core.Clock()
heartbeats = sound.Sound('A', secs=-1, stereo=True)
heartbeats.setVolume(4)
image = visual.ImageStim(
    win=win, name='image',units='cm', 
    image='sin', mask=None,
    ori=0, pos=(0, 2), size=(20, 14),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
Choice1 = visual.TextStim(win=win, name='Choice1',
    text='default text',
    font='Arial',
    units='cm', pos=(-12, 13), height=1.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
Choice2 = visual.TextStim(win=win, name='Choice2',
    text='default text',
    font='Arial',
    units='cm', pos=(12, 13), height=1.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
Choice3 = visual.TextStim(win=win, name='Choice3',
    text='default text',
    font='Arial',
    units='cm', pos=(-12, -9), height=1.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
Choice4 = visual.TextStim(win=win, name='Choice4',
    text='default text',
    font='Arial',
    units='cm', pos=(12, -9), height=1.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
Chosen = visual.TextStim(win=win, name='Chosen',
    text='default text',
    font='Arial',
    units='cm', pos=(0, -11), height=1.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
YourChoice = visual.TextStim(win=win, name='YourChoice',
    text='Your Choice:',
    font='Arial',
    units='cm', pos=(0, -9), height=1.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
twentysec = visual.TextStim(win=win, name='twentysec',
    text='20',
    font='Arial',
    units='cm', pos=(-17, 1), height=1.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
FifteenSec = visual.TextStim(win=win, name='FifteenSec',
    text='15',
    font='Arial',
    units='cm', pos=(-17, 1), height=1.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
TenSec = visual.TextStim(win=win, name='TenSec',
    text='10',
    font='Arial',
    units='cm', pos=(-17, 1), height=1.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);
FiveSec = visual.TextStim(win=win, name='FiveSec',
    text='5',
    font='Arial',
    units='cm', pos=(-17, 1), height=1.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-12.0);
Timer = visual.TextStim(win=win, name='Timer',
    text='Seconds left:',
    font='Arial',
    units='cm', pos=(-17, 3), height=1.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-13.0);

# Initialize components for Routine "EmpRate"
EmpRateClock = core.Clock()
Question = visual.TextStim(win=win, name='Question',
    text='Rate how well you felt what they were feeling:',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
rating = visual.RatingScale(win=win, name='rating', marker='triangle', size=1.0, pos=[0.0, -0.4], choices=['1', '2', '3', '4', '5'], tickHeight=1.0)

# Initialize components for Routine "Wait"
WaitClock = core.Clock()
Wait3 = visual.TextStim(win=win, name='Wait3',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "Break"
BreakClock = core.Clock()
BreakText = visual.TextStim(win=win, name='BreakText',
    text='Take a five minute break',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "EndingRemarks"
EndingRemarksClock = core.Clock()
EndText = visual.TextStim(win=win, name='EndText',
    text='Thanks for participating!\n',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Introductory_Text"-------
t = 0
Introductory_TextClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
intro = event.BuilderKeyResponse()
# keep track of which components have finished
Introductory_TextComponents = [text, intro]
for thisComponent in Introductory_TextComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Introductory_Text"-------
while continueRoutine:
    # get current time
    t = Introductory_TextClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if t >= 0.0 and text.status == NOT_STARTED:
        # keep track of start time/frame for later
        text.tStart = t
        text.frameNStart = frameN  # exact frame index
        text.setAutoDraw(True)
    
    # *intro* updates
    if t >= 0.0 and intro.status == NOT_STARTED:
        # keep track of start time/frame for later
        intro.tStart = t
        intro.frameNStart = frameN  # exact frame index
        intro.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(intro.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if intro.status == STARTED:
        theseKeys = event.getKeys(keyList=['space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            intro.keys = theseKeys[-1]  # just the last key pressed
            intro.rt = intro.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Introductory_TextComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Introductory_Text"-------
for thisComponent in Introductory_TextComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if intro.keys in ['', [], None]:  # No response was made
    intro.keys=None
thisExp.addData('intro.keys',intro.keys)
if intro.keys != None:  # we had a response
    thisExp.addData('intro.rt', intro.rt)
thisExp.nextEntry()
# the Routine "Introductory_Text" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('HeartBeat3.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Listening"-------
    t = 0
    ListeningClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(1)
    # update component parameters for each repeat
    heartbeats.setSound(sound, secs=1)
    heartbeats.setVolume(4, log=False)
    image.setImage(pic)
    Answer1 = event.BuilderKeyResponse()
    Choice1.setText('1.' + c1)
    Choice2.setText('2.' + c2)
    Choice3.setText('3.' + c3)
    Choice4.setText('4.' + c4)
    # keep track of which components have finished
    ListeningComponents = [heartbeats, image, Answer1, Choice1, Choice2, Choice3, Choice4, Chosen, YourChoice, twentysec, FifteenSec, TenSec, FiveSec, Timer]
    for thisComponent in ListeningComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "Listening"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = ListeningClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # start/stop heartbeats
        if t >= 0 and heartbeats.status == NOT_STARTED:
            # keep track of start time/frame for later
            heartbeats.tStart = t
            heartbeats.frameNStart = frameN  # exact frame index
            win.callOnFlip(heartbeats.play)  # screen flip
        frameRemains = 0 + 20- win.monitorFramePeriod * 0.75  # most of one frame period left
        if heartbeats.status == STARTED and t >= frameRemains:
            heartbeats.stop()  # stop the sound (if longer than duration)
        
        # *image* updates
        if t >= 0.0 and image.status == NOT_STARTED:
            # keep track of start time/frame for later
            image.tStart = t
            image.frameNStart = frameN  # exact frame index
            image.setAutoDraw(True)
        frameRemains = 0.0 + 20- win.monitorFramePeriod * 0.75  # most of one frame period left
        if image.status == STARTED and t >= frameRemains:
            image.setAutoDraw(False)
        
        # *Answer1* updates
        if t >= 0.0 and Answer1.status == NOT_STARTED:
            # keep track of start time/frame for later
            Answer1.tStart = t
            Answer1.frameNStart = frameN  # exact frame index
            Answer1.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(Answer1.clock.reset)  # t=0 on next screen flip
            event.clearEvents(eventType='keyboard')
        frameRemains = 0.0 + 20- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Answer1.status == STARTED and t >= frameRemains:
            Answer1.status = STOPPED
        if Answer1.status == STARTED:
            theseKeys = event.getKeys(keyList=['1', '2', '3', '4'])
            
            # check for quit:
            if "escape" in theseKeys:
                endExpNow = True
            if len(theseKeys) > 0:  # at least one key was pressed
                Answer1.keys = theseKeys[-1]  # just the last key pressed
                Answer1.rt = Answer1.clock.getTime()
        
        # *Choice1* updates
        if t >= 0.0 and Choice1.status == NOT_STARTED:
            # keep track of start time/frame for later
            Choice1.tStart = t
            Choice1.frameNStart = frameN  # exact frame index
            Choice1.setAutoDraw(True)
        frameRemains = 0.0 + 20- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Choice1.status == STARTED and t >= frameRemains:
            Choice1.setAutoDraw(False)
        
        # *Choice2* updates
        if t >= 0.0 and Choice2.status == NOT_STARTED:
            # keep track of start time/frame for later
            Choice2.tStart = t
            Choice2.frameNStart = frameN  # exact frame index
            Choice2.setAutoDraw(True)
        frameRemains = 0.0 + 20- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Choice2.status == STARTED and t >= frameRemains:
            Choice2.setAutoDraw(False)
        
        # *Choice3* updates
        if t >= 0.0 and Choice3.status == NOT_STARTED:
            # keep track of start time/frame for later
            Choice3.tStart = t
            Choice3.frameNStart = frameN  # exact frame index
            Choice3.setAutoDraw(True)
        frameRemains = 0.0 + 20- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Choice3.status == STARTED and t >= frameRemains:
            Choice3.setAutoDraw(False)
        
        # *Choice4* updates
        if t >= 0.0 and Choice4.status == NOT_STARTED:
            # keep track of start time/frame for later
            Choice4.tStart = t
            Choice4.frameNStart = frameN  # exact frame index
            Choice4.setAutoDraw(True)
        frameRemains = 0.0 + 20- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Choice4.status == STARTED and t >= frameRemains:
            Choice4.setAutoDraw(False)
        
        # *Chosen* updates
        if t >= 0.0 and Chosen.status == NOT_STARTED:
            # keep track of start time/frame for later
            Chosen.tStart = t
            Chosen.frameNStart = frameN  # exact frame index
            Chosen.setAutoDraw(True)
        frameRemains = 0.0 + 20- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Chosen.status == STARTED and t >= frameRemains:
            Chosen.setAutoDraw(False)
        if Chosen.status == STARTED:  # only update if drawing
            Chosen.setText(Answer1.keys, log=False)
        
        # *YourChoice* updates
        if t >= 0.0 and YourChoice.status == NOT_STARTED:
            # keep track of start time/frame for later
            YourChoice.tStart = t
            YourChoice.frameNStart = frameN  # exact frame index
            YourChoice.setAutoDraw(True)
        frameRemains = 0.0 + 20- win.monitorFramePeriod * 0.75  # most of one frame period left
        if YourChoice.status == STARTED and t >= frameRemains:
            YourChoice.setAutoDraw(False)
        
        # *twentysec* updates
        if t >= 0.0 and twentysec.status == NOT_STARTED:
            # keep track of start time/frame for later
            twentysec.tStart = t
            twentysec.frameNStart = frameN  # exact frame index
            twentysec.setAutoDraw(True)
        frameRemains = 5 - win.monitorFramePeriod * 0.75  # most of one frame period left
        if twentysec.status == STARTED and t >= frameRemains:
            twentysec.setAutoDraw(False)
        
        # *FifteenSec* updates
        if t >= 5 and FifteenSec.status == NOT_STARTED:
            # keep track of start time/frame for later
            FifteenSec.tStart = t
            FifteenSec.frameNStart = frameN  # exact frame index
            FifteenSec.setAutoDraw(True)
        frameRemains = 10 - win.monitorFramePeriod * 0.75  # most of one frame period left
        if FifteenSec.status == STARTED and t >= frameRemains:
            FifteenSec.setAutoDraw(False)
        
        # *TenSec* updates
        if t >= 10 and TenSec.status == NOT_STARTED:
            # keep track of start time/frame for later
            TenSec.tStart = t
            TenSec.frameNStart = frameN  # exact frame index
            TenSec.setAutoDraw(True)
        frameRemains = 15 - win.monitorFramePeriod * 0.75  # most of one frame period left
        if TenSec.status == STARTED and t >= frameRemains:
            TenSec.setAutoDraw(False)
        
        # *FiveSec* updates
        if t >= 15 and FiveSec.status == NOT_STARTED:
            # keep track of start time/frame for later
            FiveSec.tStart = t
            FiveSec.frameNStart = frameN  # exact frame index
            FiveSec.setAutoDraw(True)
        frameRemains = 20 - win.monitorFramePeriod * 0.75  # most of one frame period left
        if FiveSec.status == STARTED and t >= frameRemains:
            FiveSec.setAutoDraw(False)
        
        # *Timer* updates
        if t >= 0.0 and Timer.status == NOT_STARTED:
            # keep track of start time/frame for later
            Timer.tStart = t
            Timer.frameNStart = frameN  # exact frame index
            Timer.setAutoDraw(True)
        frameRemains = 20 - win.monitorFramePeriod * 0.75  # most of one frame period left
        if Timer.status == STARTED and t >= frameRemains:
            Timer.setAutoDraw(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ListeningComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # check for quit (the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Listening"-------
    for thisComponent in ListeningComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    heartbeats.stop()  # ensure sound has stopped at end of routine
    # check responses
    if Answer1.keys in ['', [], None]:  # No response was made
        Answer1.keys=None
    trials.addData('Answer1.keys',Answer1.keys)
    if Answer1.keys != None:  # we had a response
        trials.addData('Answer1.rt', Answer1.rt)
    
    # ------Prepare to start Routine "EmpRate"-------
    t = 0
    EmpRateClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    rating.reset()
    # keep track of which components have finished
    EmpRateComponents = [Question, rating]
    for thisComponent in EmpRateComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "EmpRate"-------
    while continueRoutine:
        # get current time
        t = EmpRateClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Question* updates
        if t >= 0.0 and Question.status == NOT_STARTED:
            # keep track of start time/frame for later
            Question.tStart = t
            Question.frameNStart = frameN  # exact frame index
            Question.setAutoDraw(True)
        # *rating* updates
        if t >= 0.0 and rating.status == NOT_STARTED:
            # keep track of start time/frame for later
            rating.tStart = t
            rating.frameNStart = frameN  # exact frame index
            rating.setAutoDraw(True)
        continueRoutine &= rating.noResponse  # a response ends the trial
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in EmpRateComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # check for quit (the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "EmpRate"-------
    for thisComponent in EmpRateComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for trials (TrialHandler)
    trials.addData('rating.response', rating.getRating())
    trials.addData('rating.rt', rating.getRT())
    # the Routine "EmpRate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Wait"-------
    t = 0
    WaitClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    WaitComponents = [Wait3]
    for thisComponent in WaitComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "Wait"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = WaitClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Wait3* updates
        if t >= 0.0 and Wait3.status == NOT_STARTED:
            # keep track of start time/frame for later
            Wait3.tStart = t
            Wait3.frameNStart = frameN  # exact frame index
            Wait3.setAutoDraw(True)
        frameRemains = 0.0 + 3.0- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Wait3.status == STARTED and t >= frameRemains:
            Wait3.setAutoDraw(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in WaitComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # check for quit (the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Wait"-------
    for thisComponent in WaitComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    #Take a break after 36 trials
    if (trials.thisN + 1) % 36 == 0:
        # ------Prepare to start Routine "Break"-------
        t = 0
        BreakClock.reset()  # clock
        frameN = -1
        continueRoutine = True
        routineTimer.add(300.000000)
        # update component parameters for each repeat
        # keep track of which components have finished
        BreakComponents = [BreakText]
        for thisComponent in BreakComponents:
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED

        # -------Start Routine "Break"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = BreakClock.getTime()
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *BreakText* updates
            if t >= 0.0 and BreakText.status == NOT_STARTED:
                # keep track of start time/frame for later
                BreakText.tStart = t
                BreakText.frameNStart = frameN  # exact frame index
                BreakText.setAutoDraw(True)
            frameRemains = 0.0 + 300- win.monitorFramePeriod * 0.75  # most of one frame period left
            if BreakText.status == STARTED and t >= frameRemains:
                BreakText.setAutoDraw(False)
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in BreakComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # check for quit (the Esc key)
            if endExpNow or event.getKeys(keyList=["escape"]):
                core.quit()
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()

        # -------Ending Routine "Break"-------
        for thisComponent in BreakComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "EndingRemarks"-------
t = 0
EndingRemarksClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
EndKey = event.BuilderKeyResponse()
# keep track of which components have finished
EndingRemarksComponents = [EndText, EndKey]
for thisComponent in EndingRemarksComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
    
    
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'

# get names of stimulus parameters
if trials.trialList in ([], [None], None):
    params = []
else:
    params = trials.trialList[0].keys()
# save data for this loop
trials.saveAsExcel(filename + '.xlsx', sheetName='trials',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])



# -------Start Routine "EndingRemarks"-------
while continueRoutine:
    # get current time
    t = EndingRemarksClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *EndText* updates
    if t >= 0.0 and EndText.status == NOT_STARTED:
        # keep track of start time/frame for later
        EndText.tStart = t
        EndText.frameNStart = frameN  # exact frame index
        EndText.setAutoDraw(True)
    
    # *EndKey* updates
    if t >= 0.0 and EndKey.status == NOT_STARTED:
        # keep track of start time/frame for later
        EndKey.tStart = t
        EndKey.frameNStart = frameN  # exact frame index
        EndKey.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(EndKey.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if EndKey.status == STARTED:
        theseKeys = event.getKeys(keyList=['y', 'n', 'left', 'right', 'space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            EndKey.keys = theseKeys[-1]  # just the last key pressed
            EndKey.rt = EndKey.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndingRemarksComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "EndingRemarks"-------
for thisComponent in EndingRemarksComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if EndKey.keys in ['', [], None]:  # No response was made
    EndKey.keys=None
thisExp.addData('EndKey.keys',EndKey.keys)
if EndKey.keys != None:  # we had a response
    thisExp.addData('EndKey.rt', EndKey.rt)
thisExp.nextEntry()
# the Routine "EndingRemarks" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()
# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
