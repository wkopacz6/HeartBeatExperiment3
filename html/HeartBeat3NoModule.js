/******************* 
 * Heartbeat3 Test *
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
let expName = 'HeartBeat3';  // from the Builder filename that created this script
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
flowScheduler.add(BreakRoutineBegin);
flowScheduler.add(BreakRoutineEachFrame);
flowScheduler.add(BreakRoutineEnd);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(BreakRoutineBegin);
flowScheduler.add(BreakRoutineEachFrame);
flowScheduler.add(BreakRoutineEnd);
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin, trials_3LoopScheduler);
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(BreakRoutineBegin);
flowScheduler.add(BreakRoutineEachFrame);
flowScheduler.add(BreakRoutineEnd);
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin, trials_4LoopScheduler);
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);
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
var image;
var Choice1;
var Choice2;
var Choice3;
var Choice4;
var Chosen;
var YourChoice;
var twentysec;
var FifteenSec;
var TenSec;
var FiveSec;
var Timer;
var EmpRateClock;
var Question;
var WaitClock;
var Wait3;
var BreakClock;
var BreakText;
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
  heartbeats.setVolume(4);
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'cm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 2], size : [20, 14],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Choice1 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice1',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [(- 12), 13], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -3.0 
  });
  
  Choice2 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice2',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [12, 13], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -4.0 
  });
  
  Choice3 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice3',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [(- 12), (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -5.0 
  });
  
  Choice4 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice4',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [12, (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -6.0 
  });
  
  Chosen = new visual.TextStim({
    win : psychoJS.window,
    name : 'Chosen',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [0, (- 11)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -7.0 
  });
  
  YourChoice = new visual.TextStim({
    win : psychoJS.window,
    name : 'YourChoice',
    text : 'Your Choice:',
    font : 'Arial',
    units : 'cm',   pos : [0, (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -8.0 
  });
  
  twentysec = new visual.TextStim({
    win : psychoJS.window,
    name : 'twentysec',
    text : '20',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -9.0 
  });
  
  FifteenSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'FifteenSec',
    text : '15',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -10.0 
  });
  
  TenSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'TenSec',
    text : '10',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -11.0 
  });
  
  FiveSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'FiveSec',
    text : '5',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -12.0 
  });
  
  Timer = new visual.TextStim({
    win : psychoJS.window,
    name : 'Timer',
    text : 'Seconds left:',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 3], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -13.0 
  });
  
  // Initialize components for Routine "EmpRate"
  EmpRateClock = new util.Clock();
  Question = new visual.TextStim({
    win : psychoJS.window,
    name : 'Question',
    text : 'Rate how well you felt what they were feeling:',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
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
  
  // Initialize components for Routine "Break"
  BreakClock = new util.Clock();
  BreakText = new visual.TextStim({
    win : psychoJS.window,
    name : 'BreakText',
    text : 'Take a five minute break',
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
  heartbeats.setVolume(4);
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'cm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 2], size : [20, 14],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Choice1 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice1',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [(- 12), 13], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -3.0 
  });
  
  Choice2 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice2',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [12, 13], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -4.0 
  });
  
  Choice3 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice3',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [(- 12), (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -5.0 
  });
  
  Choice4 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice4',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [12, (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -6.0 
  });
  
  Chosen = new visual.TextStim({
    win : psychoJS.window,
    name : 'Chosen',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [0, (- 11)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -7.0 
  });
  
  YourChoice = new visual.TextStim({
    win : psychoJS.window,
    name : 'YourChoice',
    text : 'Your Choice:',
    font : 'Arial',
    units : 'cm',   pos : [0, (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -8.0 
  });
  
  twentysec = new visual.TextStim({
    win : psychoJS.window,
    name : 'twentysec',
    text : '20',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -9.0 
  });
  
  FifteenSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'FifteenSec',
    text : '15',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -10.0 
  });
  
  TenSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'TenSec',
    text : '10',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -11.0 
  });
  
  FiveSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'FiveSec',
    text : '5',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -12.0 
  });
  
  Timer = new visual.TextStim({
    win : psychoJS.window,
    name : 'Timer',
    text : 'Seconds left:',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 3], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -13.0 
  });
  
  // Initialize components for Routine "EmpRate"
  EmpRateClock = new util.Clock();
  Question = new visual.TextStim({
    win : psychoJS.window,
    name : 'Question',
    text : 'Rate how well you felt what they were feeling:',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
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
  
  // Initialize components for Routine "Break"
  BreakClock = new util.Clock();
  BreakText = new visual.TextStim({
    win : psychoJS.window,
    name : 'BreakText',
    text : 'Take a five minute break',
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
  heartbeats.setVolume(4);
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'cm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 2], size : [20, 14],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Choice1 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice1',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [(- 12), 13], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -3.0 
  });
  
  Choice2 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice2',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [12, 13], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -4.0 
  });
  
  Choice3 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice3',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [(- 12), (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -5.0 
  });
  
  Choice4 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice4',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [12, (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -6.0 
  });
  
  Chosen = new visual.TextStim({
    win : psychoJS.window,
    name : 'Chosen',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [0, (- 11)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -7.0 
  });
  
  YourChoice = new visual.TextStim({
    win : psychoJS.window,
    name : 'YourChoice',
    text : 'Your Choice:',
    font : 'Arial',
    units : 'cm',   pos : [0, (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -8.0 
  });
  
  twentysec = new visual.TextStim({
    win : psychoJS.window,
    name : 'twentysec',
    text : '20',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -9.0 
  });
  
  FifteenSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'FifteenSec',
    text : '15',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -10.0 
  });
  
  TenSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'TenSec',
    text : '10',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -11.0 
  });
  
  FiveSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'FiveSec',
    text : '5',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -12.0 
  });
  
  Timer = new visual.TextStim({
    win : psychoJS.window,
    name : 'Timer',
    text : 'Seconds left:',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 3], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -13.0 
  });
  
  // Initialize components for Routine "EmpRate"
  EmpRateClock = new util.Clock();
  Question = new visual.TextStim({
    win : psychoJS.window,
    name : 'Question',
    text : 'Rate how well you felt what they were feeling:',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
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
  
  // Initialize components for Routine "Break"
  BreakClock = new util.Clock();
  BreakText = new visual.TextStim({
    win : psychoJS.window,
    name : 'BreakText',
    text : 'Take a five minute break',
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
  heartbeats.setVolume(4);
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'cm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 2], size : [20, 14],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Choice1 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice1',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [(- 12), 13], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -3.0 
  });
  
  Choice2 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice2',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [12, 13], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -4.0 
  });
  
  Choice3 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice3',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [(- 12), (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -5.0 
  });
  
  Choice4 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Choice4',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [12, (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -6.0 
  });
  
  Chosen = new visual.TextStim({
    win : psychoJS.window,
    name : 'Chosen',
    text : 'default text',
    font : 'Arial',
    units : 'cm',   pos : [0, (- 11)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -7.0 
  });
  
  YourChoice = new visual.TextStim({
    win : psychoJS.window,
    name : 'YourChoice',
    text : 'Your Choice:',
    font : 'Arial',
    units : 'cm',   pos : [0, (- 9)], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -8.0 
  });
  
  twentysec = new visual.TextStim({
    win : psychoJS.window,
    name : 'twentysec',
    text : '20',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -9.0 
  });
  
  FifteenSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'FifteenSec',
    text : '15',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -10.0 
  });
  
  TenSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'TenSec',
    text : '10',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -11.0 
  });
  
  FiveSec = new visual.TextStim({
    win : psychoJS.window,
    name : 'FiveSec',
    text : '5',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 1], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -12.0 
  });
  
  Timer = new visual.TextStim({
    win : psychoJS.window,
    name : 'Timer',
    text : 'Seconds left:',
    font : 'Arial',
    units : 'cm',   pos : [(- 17), 3], height : 1.5,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -13.0 
  });
  
  // Initialize components for Routine "EmpRate"
  EmpRateClock = new util.Clock();
  Question = new visual.TextStim({
    win : psychoJS.window,
    name : 'Question',
    text : 'Rate how well you felt what they were feeling:',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
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
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Heart2Cond.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importTrialAttributes(thisTrial));
    thisScheduler.add(ListeningRoutineBegin);
    thisScheduler.add(ListeningRoutineEachFrame);
    thisScheduler.add(ListeningRoutineEnd);
    thisScheduler.add(EmpRateRoutineBegin);
    thisScheduler.add(EmpRateRoutineEachFrame);
    thisScheduler.add(EmpRateRoutineEnd);
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

var trials_2;
function trials_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_2'});
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial_2 of trials_2) {
    thisScheduler.add(importTrialAttributes(thisTrial_2));
    thisScheduler.add(ListeningRoutineBegin);
    thisScheduler.add(ListeningRoutineEachFrame);
    thisScheduler.add(ListeningRoutineEnd);
    thisScheduler.add(EmpRateRoutineBegin);
    thisScheduler.add(EmpRateRoutineEachFrame);
    thisScheduler.add(EmpRateRoutineEnd);
    thisScheduler.add(WaitRoutineBegin);
    thisScheduler.add(WaitRoutineEachFrame);
    thisScheduler.add(WaitRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial_2));
  }

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);
  psychoJS.experiment.save({
    attributes: trials_2.getAttributes()
  });

  return Scheduler.Event.NEXT;
}

var trials_3;
function trials_3LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_3 = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_3'});
  psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial_3 of trials_3) {
    thisScheduler.add(importTrialAttributes(thisTrial_3));
    thisScheduler.add(ListeningRoutineBegin);
    thisScheduler.add(ListeningRoutineEachFrame);
    thisScheduler.add(ListeningRoutineEnd);
    thisScheduler.add(EmpRateRoutineBegin);
    thisScheduler.add(EmpRateRoutineEachFrame);
    thisScheduler.add(EmpRateRoutineEnd);
    thisScheduler.add(WaitRoutineBegin);
    thisScheduler.add(WaitRoutineEachFrame);
    thisScheduler.add(WaitRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial_3));
  }

  return Scheduler.Event.NEXT;
}


function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);
  psychoJS.experiment.save({
    attributes: trials_3.getAttributes()
  });

  return Scheduler.Event.NEXT;
}

var trials_4;
function trials_4LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_4 = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_4'});
  psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial_4 of trials_4) {
    thisScheduler.add(importTrialAttributes(thisTrial_4));
    thisScheduler.add(ListeningRoutineBegin);
    thisScheduler.add(ListeningRoutineEachFrame);
    thisScheduler.add(ListeningRoutineEnd);
    thisScheduler.add(EmpRateRoutineBegin);
    thisScheduler.add(EmpRateRoutineEachFrame);
    thisScheduler.add(EmpRateRoutineEnd);
    thisScheduler.add(WaitRoutineBegin);
    thisScheduler.add(WaitRoutineEachFrame);
    thisScheduler.add(WaitRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial_4));
  }

  return Scheduler.Event.NEXT;
}


function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);
  psychoJS.experiment.save({
    attributes: trials_4.getAttributes()
  });

  return Scheduler.Event.NEXT;
}

var Answer1;
var ListeningComponents;
function ListeningRoutineBegin() {
  //------Prepare to start Routine 'Listening'-------
  t = 0;
  ListeningClock.reset(); // clock
  frameN = -1;
  routineTimer.add(20.000000);
  // update component parameters for each repeat
  heartbeats.setSound(sound, secs=20)
  heartbeats.setVolume(4, log=False)
  image.setImage(pic);
  Answer1 = new core.BuilderKeyResponse(psychoJS);
  Choice1.setText(('1.' + c1));
  Choice2.setText(('2.' + c2));
  Choice3.setText(('3.' + c3));
  Choice4.setText(('4.' + c4));
  // keep track of which components have finished
  ListeningComponents = [];
  ListeningComponents.push(heartbeats);
  ListeningComponents.push(image);
  ListeningComponents.push(Answer1);
  ListeningComponents.push(Choice1);
  ListeningComponents.push(Choice2);
  ListeningComponents.push(Choice3);
  ListeningComponents.push(Choice4);
  ListeningComponents.push(Chosen);
  ListeningComponents.push(YourChoice);
  ListeningComponents.push(twentysec);
  ListeningComponents.push(FifteenSec);
  ListeningComponents.push(TenSec);
  ListeningComponents.push(FiveSec);
  ListeningComponents.push(Timer);
  
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
  frameRemains = 0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (heartbeats.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    heartbeats.stop();  // stop the sound (if longer than duration)
  }
  
  // *image* updates
  if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image.tStart = t;  // (not accounting for frame time here)
    image.frameNStart = frameN;  // exact frame index
    image.setAutoDraw(true);
  }
  frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    image.setAutoDraw(false);
  }
  
  // *Answer1* updates
  if (t >= 0.0 && Answer1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Answer1.tStart = t;  // (not accounting for frame time here)
    Answer1.frameNStart = frameN;  // exact frame index
    Answer1.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    Answer1.clock.reset();  // now t=0
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Answer1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Answer1.status = PsychoJS.Status.STOPPED;
  }
  if (Answer1.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1', '2', '3', '4']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      Answer1.keys = theseKeys[theseKeys.length-1]  // just the last key pressed
      Answer1.rt = Answer1.clock.getTime();
    }
  }
  
  // *Choice1* updates
  if (t >= 0.0 && Choice1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Choice1.tStart = t;  // (not accounting for frame time here)
    Choice1.frameNStart = frameN;  // exact frame index
    Choice1.setAutoDraw(true);
  }
  frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Choice1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Choice1.setAutoDraw(false);
  }
  
  // *Choice2* updates
  if (t >= 0.0 && Choice2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Choice2.tStart = t;  // (not accounting for frame time here)
    Choice2.frameNStart = frameN;  // exact frame index
    Choice2.setAutoDraw(true);
  }
  frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Choice2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Choice2.setAutoDraw(false);
  }
  
  // *Choice3* updates
  if (t >= 0.0 && Choice3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Choice3.tStart = t;  // (not accounting for frame time here)
    Choice3.frameNStart = frameN;  // exact frame index
    Choice3.setAutoDraw(true);
  }
  frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Choice3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Choice3.setAutoDraw(false);
  }
  
  // *Choice4* updates
  if (t >= 0.0 && Choice4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Choice4.tStart = t;  // (not accounting for frame time here)
    Choice4.frameNStart = frameN;  // exact frame index
    Choice4.setAutoDraw(true);
  }
  frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Choice4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Choice4.setAutoDraw(false);
  }
  
  // *Chosen* updates
  if (t >= 0.0 && Chosen.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Chosen.tStart = t;  // (not accounting for frame time here)
    Chosen.frameNStart = frameN;  // exact frame index
    Chosen.setAutoDraw(true);
  }
  frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Chosen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Chosen.setAutoDraw(false);
  }
  if (Chosen.status === PsychoJS.Status.STARTED){ // only update if being drawn
    Chosen.setText(Answer1.keys);
  }
  
  // *YourChoice* updates
  if (t >= 0.0 && YourChoice.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    YourChoice.tStart = t;  // (not accounting for frame time here)
    YourChoice.frameNStart = frameN;  // exact frame index
    YourChoice.setAutoDraw(true);
  }
  frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (YourChoice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    YourChoice.setAutoDraw(false);
  }
  
  // *twentysec* updates
  if (t >= 0.0 && twentysec.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    twentysec.tStart = t;  // (not accounting for frame time here)
    twentysec.frameNStart = frameN;  // exact frame index
    twentysec.setAutoDraw(true);
  }
  frameRemains = 5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (twentysec.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    twentysec.setAutoDraw(false);
  }
  
  // *FifteenSec* updates
  if (t >= 5 && FifteenSec.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    FifteenSec.tStart = t;  // (not accounting for frame time here)
    FifteenSec.frameNStart = frameN;  // exact frame index
    FifteenSec.setAutoDraw(true);
  }
  frameRemains = 10  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (FifteenSec.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    FifteenSec.setAutoDraw(false);
  }
  
  // *TenSec* updates
  if (t >= 10 && TenSec.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    TenSec.tStart = t;  // (not accounting for frame time here)
    TenSec.frameNStart = frameN;  // exact frame index
    TenSec.setAutoDraw(true);
  }
  frameRemains = 15  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (TenSec.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    TenSec.setAutoDraw(false);
  }
  
  // *FiveSec* updates
  if (t >= 15 && FiveSec.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    FiveSec.tStart = t;  // (not accounting for frame time here)
    FiveSec.frameNStart = frameN;  // exact frame index
    FiveSec.setAutoDraw(true);
  }
  frameRemains = 20  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (FiveSec.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    FiveSec.setAutoDraw(false);
  }
  
  // *Timer* updates
  if (t >= 0.0 && Timer.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Timer.tStart = t;  // (not accounting for frame time here)
    Timer.frameNStart = frameN;  // exact frame index
    Timer.setAutoDraw(true);
  }
  frameRemains = 20  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Timer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Timer.setAutoDraw(false);
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
  // check responses
  if (['', [], undefined].indexOf(Answer1.keys) >= 0) {    // No response was made
      Answer1.keys = undefined;
  }
  psychoJS.experiment.addData('Answer1.keys', Answer1.keys);
  if (Answer1.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('Answer1.rt', Answer1.rt);
      }
  return Scheduler.Event.NEXT;
}

var EmpRateComponents;
function EmpRateRoutineBegin() {
  //------Prepare to start Routine 'EmpRate'-------
  t = 0;
  EmpRateClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  EmpRateComponents = [];
  EmpRateComponents.push(Question);
  
  for (const thisComponent of EmpRateComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function EmpRateRoutineEachFrame() {
  //------Loop for each frame of Routine 'EmpRate'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = EmpRateClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Question* updates
  if (t >= 0.0 && Question.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question.tStart = t;  // (not accounting for frame time here)
    Question.frameNStart = frameN;  // exact frame index
    Question.setAutoDraw(true);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of EmpRateComponents)
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


function EmpRateRoutineEnd() {
  //------Ending Routine 'EmpRate'-------
  for (const thisComponent of EmpRateComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "EmpRate" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
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

var BreakComponents;
function BreakRoutineBegin() {
  //------Prepare to start Routine 'Break'-------
  t = 0;
  BreakClock.reset(); // clock
  frameN = -1;
  routineTimer.add(300.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  BreakComponents = [];
  BreakComponents.push(BreakText);
  
  for (const thisComponent of BreakComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function BreakRoutineEachFrame() {
  //------Loop for each frame of Routine 'Break'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = BreakClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *BreakText* updates
  if (t >= 0.0 && BreakText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    BreakText.tStart = t;  // (not accounting for frame time here)
    BreakText.frameNStart = frameN;  // exact frame index
    BreakText.setAutoDraw(true);
  }
  frameRemains = 0.0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (BreakText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    BreakText.setAutoDraw(false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of BreakComponents)
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


function BreakRoutineEnd() {
  //------Ending Routine 'Break'-------
  for (const thisComponent of BreakComponents) {
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
