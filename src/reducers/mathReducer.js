const initialState = {
  /* MathProgram states */
  minimo: 10,
  maximo: 99,
  numerito1: null,
  numerito2: null,
  sign: '+',
  result: null,
  timer: null,
  mathModal: false,
  trainingModeFlag: false,
  /* inputValue: null, */
  colourBox: '',
  /* buttons */
  generateBtnMath: true,
  waitingBtnMath: false,
  nextBtnMath: false, 

  /* MemoryProgram state */
  randoms: [null, null, null, null],
  wrongAudioState: false,
  timerMemory: 1000,
  mountNumbers: 4,
  memoryModal: false,
  renderInputs: true,
  /* buttons */
  generateBtnStyle: true,
  checkBtnStyle: false,
  nextBtnStyle: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    /* MathReducers */
    case 'GENERATE_NUM':
        return {
            ...state,
            numerito1: action.payload1,
            numerito2: action.payload2,
        }

    case 'GENERATE_SIGN':
        return {
            ...state,
            sign: action.payload,
        }

    case 'SET_MIN_AND_MAX':
        return {
            ...state,
            minimo: action.payload1,
            maximo: action.payload2,
        }

    case 'GENERATE_TIMER':
        return {
            ...state,
            timer: action.payload
        }

    case 'ADD_INPUT_VALUE':
        return {
            ...state,
            inputValue: action.payload
        }   

    case 'CHANGE_BTN_MATH':
        return {
            ...state,
            generateBtnMath: action.payload1, 
            nextBtnMath: action.payload2
        }

    case 'CHANGE_BOX_COLOUR':
        return {
            ...state,
            colourBox: action.payload
        }

    case 'MATH_RESULT_OPERATION':
        return {
            ...state,
            result: action.payload,
        }

    case 'TOGGLE_MODAL_MATH':
        return {
            ...state,
            mathModal: !state.mathModal,
        }

    case 'CLEAR_VALUES_MATH':
        return {
            ...state,
            numerito1: null,
            numerito2: null,
            generateBtnMath: true,
            waitingBtnMath: false,
            nextBtnMath: false, 
        }

    case 'CHANGE_TRAINING_MODE_FLAG':
        return {
            ...state,
            trainingModeFlag: !state.trainingModeFlag
        }

    /* Memory reducers */
    case 'PASSING_RANDOM_NUMS':
        /* console.log(action.payload); */
        return {
            ...state,
            randoms: action.payload1,
            mountNumbers: action.payload2,
        }

    case 'PLAY_WRONG_AUDIO':
        return {
            ...state,
            wrongAudioState: action.payload
        }

    case 'GENERATE_TIMER_MEMORY':
        return {
        ...state,
        timerMemory: action.payload
    }

    case 'CHANGE_BTN':
        return {
        ...state,
        generateBtnStyle: action.payload1, // set the styles button according to the stage of the program
        checkBtnStyle: action.payload2,
        nextBtnStyle: action.payload3,
    } 

    case 'TOGGLE_MODAL_MEMORY':
    return {
        ...state,
        memoryModal: !state.memoryModal,
    } 
    default:
      return state;
  }
}
