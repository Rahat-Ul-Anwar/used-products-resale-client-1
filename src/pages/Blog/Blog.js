import React from "react";

const Blog = () => {
  return (
    <div className="grid gap-6 m-6 grid-cols-1 md:grid-cols-2" >
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">1. How does Prototypical inheritence work?</h2>
          <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
         </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">2. What is unit test? why should we write unit test?</h2>
          <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
         </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">3. What are the different ways to manage a state in a react application?</h2>
          <h4 className="text-xl">The Four Kinds of React State to Manage:</h4>
          <p> <li> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.</li></p>
          <p> <li>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</li></p>
          <p><li>Data that comes from an external server that must be integrated with our UI state.</li></p>
          <p><li>URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. </li></p>
         </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">4. React vs Angular vs Vue?</h2>
           <h3 className="text-xl font-bold">React</h3>
          <p>This open-source Javascript library has become quite the rage for developing interactive web and mobile apps since Facebook launched it in 2013.There are primarily three reasons which have made the React library a developer darling -Code Reusability,Ease-of-use and Customizable </p>
           <h3 className="text-xl font-bold">Angular</h3>
          <p>Angular is a favorite for large scale apps with complex functionalities, which wish to scale further.Angular is a robust framework that has all the needed functionalities packed into its official library.Maintenance of Angular JS code is usually a piece of cake as it uses Typescript- a simplified version of Javascript which makes it easier for developers to catch faulty code whilst typing itself.</p>
           <h3 className="text-xl font-bold">Vue</h3>
          <p>Vue is best utilized in cases of lightweight yet high performance, intuitive apps as the applications are quickly ready for the market without compromising on the performance or functionalities.However, what we do know is that Vue has the best of both worlds- two-way data binding like Angular and flexibility in code like React. Because of this, Vue is rising steadily through the ranks and has a massive market in Asia- Alibaba and Xiaomi are the big names using Vue JS.</p>
         </div>
      </div>
    </div>
  );
};

export default Blog;
