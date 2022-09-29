import React from "react";
import "../Questions/Questions.css";
const Questions = () => {
  return (
    <div className="all-q">
      <div className="question">
        <h2>How does React work ?</h2>
        <p>
          React is A JS library . It makes SPA(single page application) UI . It
          works like a group of JS functions. They are called components . They
          takes parameters as props . In those components , we write the markup
          using JSX . React compiles it in JS by babel and makes the UI . React
          notices changes on site by react's state . React creates a virtual DOM
          to compare and update UI. When we change any state , react compares
          the current state with virtual DOM and decides where to change and
          finally it updates the particullar component of the UI . Thats how it
          works .
        </p>
      </div>
      <div className="question">
        <h2>What are the differences between props and states in React ?</h2>
        <p>
          props are nothing but parameters of React components . It works almost
          same like plain JS . But prop are sent as JSX attributes and react
          converts it in an object . So the functional component gets props as
          an object . <br />
          On the other hand , state is on of the react hooks . It is the main
          key for creating a single page apllications. when state is changed ,
          react knows that something need be to changed in the UI . Also props
          are immutable , they can not be chaged after passing. But states are
          always mutable. In fact , Changing the state is the purpose of using
          state .
        </p>
      </div>
      <div className="question">
        <h2>
          What are the usage of useEffect excluding fetching data from API ?
        </h2>
        <p>
          Tasks that are not supposed to be done by react are done in the
          useEffect hook like fething data from API . But fething is not the
          only purpose for using useEffect . Basically react makes the UI . But
          if we have to do other works like data fething , setting Interval ,
          calling data base or we have to perform any asyncronous task we have
          to go with this useEffect hook . However it is also used to control a
          group of task that need to be exicuted only one time or on change of
          some particular things by the dependency array of useEffect.
        </p>
      </div>
    </div>
  );
};

export default Questions;
