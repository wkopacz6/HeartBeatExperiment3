/******************* 
 * Heartbeat1 Test *
 *******************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'use prefs'
});

// store info about the experiment session:
let expName = 'HeartBeat1';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Introductory_TextRoutineBegin);
flowScheduler.add(Introductory_TextRoutineEachFrame);
flowScheduler.add(Introductory_TextRoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(EndingRemarksRoutineBegin);
flowScheduler.add(EndingRemarksRoutineEachFrame);
flowScheduler.add(EndingRemarksRoutineEnd);
flowScheduler.add(quitPsychoJS);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);

  return Scheduler.Event.NEXT;
}

var Introductory_TextClock;
var text;
var ListeningClock;
var heartbeats;
var WaitClock;
var Wait3;
var EndingRemarksClock;
var EndText;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Introductory_Text"
  Introductory_TextClock = new util.Clock();
  text = new visual.TextStim({
    win : psychoJS.window,
    name : 'text',
    text : '(insert desired text here)\n\nPress the space bar to continue\n',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  // Initialize components for Routine "Listening"
  ListeningClock = new util.Clock();
  heartbeats = new Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  heartbeats.setVolume(1);
  // Initialize components for Routine "Wait"
  WaitClock = new util.Clock();
  Wait3 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Wait3',
    text : None,
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  // Initialize components for Routine "EndingRemarks"
  EndingRemarksClock = new util.Clock();
  EndText = new visual.TextStim({
    win : psychoJS.window,
    name : 'EndText',
    text : 'Thanks for participating!\n',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var intro;
var Introductory_TextComponents;
function Introductory_TextRoutineBegin() {
  //------Prepare to start Routine 'Introductory_Text'-------
  t = 0;
  Introductory_TextClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  intro = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  Introductory_TextComponents = [];
  Introductory_TextComponents.push(text);
  Introductory_TextComponents.push(intro);
  
  for (const thisComponent of Introductory_TextComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function Introductory_TextRoutineEachFrame() {
  //------Loop for each frame of Routine 'Introductory_Text'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Introductory_TextClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }
  
  // *intro* updates
  if (t >= 0.0 && intro.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    intro.tStart = t;  // (not accounting for frame time here)
    intro.frameNStart = frameN;  // exact frame index
    intro.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    intro.clock.reset();  // now t=0
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (intro.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      intro.keys = theseKeys[theseKeys.length-1]  // just the last key pressed
      intro.rt = intro.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Introductory_TextComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Introductory_TextRoutineEnd() {
  //------Ending Routine 'Introductory_Text'-------
  for (const thisComponent of Introductory_TextComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // check responses
  if (['', [], undefined].indexOf(intro.keys) >= 0) {    // No response was made
      intro.keys = undefined;
  }
  psychoJS.experiment.addData('intro.keys', intro.keys);
  if (intro.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('intro.rt', intro.rt);
      routineTimer.reset();
      }
  // the Routine "Introductory_Text" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS,
    nReps: 40, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Exp1Conditions.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importTrialAttributes(thisTrial));
    thisScheduler.add(ListeningRoutineBegin);
    thisScheduler.add(ListeningRoutineEachFrame);
    thisScheduler.add(ListeningRoutineEnd);
    thisScheduler.add(WaitRoutineBegin);
    thisScheduler.add(WaitRoutineEachFrame);
    thisScheduler.add(WaitRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);
  psychoJS.experiment.save({
    attributes: trials.getAttributes()
  });

  return Scheduler.Event.NEXT;
}

var ListeningComponents;
function ListeningRoutineBegin() {
  //------Prepare to start Routine 'Listening'-------
  t = 0;
  ListeningClock.reset(); // clock
  frameN = -1;
  routineTimer.add(15.000000);
  // update component parameters for each repeat
  heartbeats.setSound(Sound, secs=15)
  heartbeats.setVolume(1, log=False)
  // keep track of which components have finished
  ListeningComponents = [];
  ListeningComponents.push(heartbeats);
  
  for (const thisComponent of ListeningComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function ListeningRoutineEachFrame() {
  //------Loop for each frame of Routine 'Listening'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ListeningClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // start/stop heartbeats
  if (t >= 0 && heartbeats.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    heartbeats.tStart = t;  // (not accounting for frame time here)
    heartbeats.frameNStart = frameN;  // exact frame index
    heartbeats.play();  // start the sound (it finishes automatically)
  }
  frameRemains = 0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (heartbeats.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    heartbeats.stop();  // stop the sound (if longer than duration)
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of ListeningComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ListeningRoutineEnd() {
  //------Ending Routine 'Listening'-------
  for (const thisComponent of ListeningComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  heartbeats.stop();  // ensure sound has stopped at end of routine
  return Scheduler.Event.NEXT;
}

var WaitComponents;
function WaitRoutineBegin() {
  //------Prepare to start Routine 'Wait'-------
  t = 0;
  WaitClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  WaitComponents = [];
  WaitComponents.push(Wait3);
  
  for (const thisComponent of WaitComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function WaitRoutineEachFrame() {
  //------Loop for each frame of Routine 'Wait'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = WaitClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Wait3* updates
  if (t >= 0.0 && Wait3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Wait3.tStart = t;  // (not accounting for frame time here)
    Wait3.frameNStart = frameN;  // exact frame index
    Wait3.setAutoDraw(true);
  }
  frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Wait3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Wait3.setAutoDraw(false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of WaitComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function WaitRoutineEnd() {
  //------Ending Routine 'Wait'-------
  for (const thisComponent of WaitComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var EndKey;
var EndingRemarksComponents;
function EndingRemarksRoutineBegin() {
  //------Prepare to start Routine 'EndingRemarks'-------
  t = 0;
  EndingRemarksClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  EndKey = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  EndingRemarksComponents = [];
  EndingRemarksComponents.push(EndText);
  EndingRemarksComponents.push(EndKey);
  
  for (const thisComponent of EndingRemarksComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function EndingRemarksRoutineEachFrame() {
  //------Loop for each frame of Routine 'EndingRemarks'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = EndingRemarksClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *EndText* updates
  if (t >= 0.0 && EndText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    EndText.tStart = t;  // (not accounting for frame time here)
    EndText.frameNStart = frameN;  // exact frame index
    EndText.setAutoDraw(true);
  }
  
  // *EndKey* updates
  if (t >= 0.0 && EndKey.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    EndKey.tStart = t;  // (not accounting for frame time here)
    EndKey.frameNStart = frameN;  // exact frame index
    EndKey.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    EndKey.clock.reset();  // now t=0
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (EndKey.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['y', 'n', 'left', 'right', 'space']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      EndKey.keys = theseKeys[theseKeys.length-1]  // just the last key pressed
      EndKey.rt = EndKey.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of EndingRemarksComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function EndingRemarksRoutineEnd() {
  //------Ending Routine 'EndingRemarks'-------
  for (const thisComponent of EndingRemarksComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // check responses
  if (['', [], undefined].indexOf(EndKey.keys) >= 0) {    // No response was made
      EndKey.keys = undefined;
  }
  psychoJS.experiment.addData('EndKey.keys', EndKey.keys);
  if (EndKey.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('EndKey.rt', EndKey.rt);
      routineTimer.reset();
      }
  // the Routine "EndingRemarks" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importTrialAttributes(thisTrial) {
  return function () {
    psychoJS.importAttributes(thisTrial);

    return Scheduler.Event.NEXT;
  };
}


function quitPsychoJS() {
  psychoJS.window.close();
  psychoJS.quit();

  return Scheduler.Event.QUIT;
}
