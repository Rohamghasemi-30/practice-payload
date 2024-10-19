import React, { useReducer } from 'react';
import './App.css';


const App = () => {

  const initialState = {
    name: '',
    email: '',
    submitted: false,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload };
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SUBMIT_FORM':
        return { ...state, submitted: true };
      case 'RESET_FORM':
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_FORM' });
  };

  if (state.submitted) {
    return (
      <div className="app-container">
        <h1>فرم با موفقیت ارسال شد</h1>
        <p><strong>نام:</strong> {state.name}</p>
        <p><strong>ایمیل:</strong> {state.email}</p>
        <button
          className="reset-btn"
          onClick={() => dispatch({ type: 'RESET_FORM' })}
        >
          بازنشانی فرم
        </button>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>اطلاعات خود را وارد کنید</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">نام:</label>
          <input
            type="text"
            id="name"
            value={state.name}
            onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">ایمیل:</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="submit-btn">ارسال</button>
      </form>
    </div>
  );
};

export default App;
