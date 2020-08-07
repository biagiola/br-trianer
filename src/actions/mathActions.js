/* MathProgram actions */
export const generateNum = (min, max) => dispatch => {
    let a = Math.round(Math.random() * (max - min) + min);
    let b = Math.round(Math.random() * (max - min) + min);
    dispatch({
        type: 'GENERATE_NUM',
        payload1: a,
        payload2: b,
    });
}
export const generateSign = sign => dispatch => {
    dispatch({
        type: 'GENERATE_SIGN',
        payload: sign,
    });
}

export const setMinAndMax = (min, max) => dispatch => {
    dispatch({
        type: 'SET_MIN_AND_MAX',
        payload1: min,
        payload2: max
    });
}

export const generateTimer = time => dispatch => {
    let tiempo = time*100;
    dispatch({
        type: 'GENERATE_TIMER',
        payload: tiempo,
    });
}

export const addInputValue = value => dispatch => {
    dispatch( {
        type: 'ADD_INPUT_VALUE',
        payload: value,
    });
}

export const changeBtnMath = stage => dispatch => {
    let generate; 
    let next;  

    console.log(stage);

    if (stage === 'generate') {
        generate = false;
        next = true;
    }        
    if (stage === 'next') {  
        generate = true;
        next = false;
    }
    dispatch({
        type: 'CHANGE_BTN_MATH',
        payload1: generate,
        payload2: next,
    });
}
export const matchResult = result => dispatch => {
    let colour;

    if (result === 'right') {
        colour = 'green';
    }        
    if (result === 'wrong') {  
        colour = 'red';
    }
    if (result === 'initial') {  
        colour = '';        
    }
    dispatch({
        type: 'CHANGE_BOX_COLOUR',
        payload: colour,
    });
}

export const mathResultOperation = result => dispatch => {
    dispatch({
        type: 'MATH_RESULT_OPERATION',
        payload: result, 
    });
}

export const toggleModalMath = () => dispatch => {
    dispatch({
        type: 'TOGGLE_MODAL_MATH',
    })
}

export const clearValuesMath = () => dispatch => {
    dispatch({
        type: 'CLEAR_VALUES_MATH'
    })
}

export const trainingModeBegins = flag => dispatch => {
    dispatch({
        type: 'CHANGE_TRAINING_MODE_FLAG',
    })
}


/* MemoryProgram actions */
export const passingRandomNums = (random, mount) => dispatch => {
    dispatch({
        type: 'PASSING_RANDOM_NUMS',
        payload1: random,
        payload2: mount
    });
}

export const playWrongAudio = data => dispatch => {
    dispatch({
        type: 'PLAY_WRONG_AUDIO',
        payload: data
    })
}

export const generateTimerMemory = time => dispatch => {
    dispatch({
        type: 'GENERATE_TIMER_MEMORY',
        payload: time,
    });
}

export const changeBtn = stage => dispatch => {    
    let generate; 
    let next; 
    let check;

    if (stage === 'generate') {
        generate = false;
        check = true;
        next = false;
    }        
    if (stage === 'check') {
        generate =false;
        check =false;
        next = true;
    }            
    if (stage === 'next') {  
        generate = true;
        check =false;
        next = false;
    }
    dispatch({
        type: 'CHANGE_BTN',
        payload1: generate,
        payload2: check,
        payload3: next,
    });
}

export const toggleModalMemory = () => dispatch => {
    dispatch ({
        type: 'TOGGLE_MODAL_MEMORY',
    })
}

