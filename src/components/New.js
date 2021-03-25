import React from "react"

class New extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: "",
      password2: "",
      password3: "",
      password4: "",
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const {
      email,
      username,
      password,
      password2,
      password3,
      password4,
    } = this.state
    alert(`Your registration detail: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`)
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep,
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep,
    })
  }

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      )
    }
    return null
  }

  nextButton() {
    let currentStep = this.state.currentStep
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      )
    }
    return null
  }

  render() {
    return (
      <React.Fragment>
        <h1>React Wizard Form 🧙‍♂️</h1>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {/* 
          render the form steps and pass required props in
        */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password2}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password3}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password4}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </React.Fragment>
    )
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
      />
    </div>
  )
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  )
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  )
}

export default New
// const New = () => {
//   // -------------------------
//   // Random key for the "Activation Key" field
//   // -------------------------
//   //   var key =
//   //     Math.random() +
//   //     (1)
//   //     .toString(36)
//   //     .substring(7)(
//   //       // Set a fake link to the user account
//   //       ".modal-body-step-7 label"
//   //     )
//   //   .html()(
//   // -------------------------
//   // NEXT STEP button
//   // -------------------------
//   // ".button.next"
//   //   )
//   //   click(function () {
//   //     var btn = this,
//   //       step = btn.parents(".modal-body"),
//   //       stepIndex = step.index(),
//   //       pag = ".modal-header span".eq(stepIndex)

//   //     if (stepIndex === 5) {
//   //       var value = $("#activation").val()
//   //       if (value != key) {
//   //         error($step, $pag)
//   //       } else {
//   //         nextStep($step, $pag)
//   //       }
//   //     } else {
//   //       nextStep($step, $pag)
//   //     }
//   //   })
//   //   (
//   // -------------------------
//   // PREVIOUS STEP button
//   // -------------------------
//   // ".button.previous"
//   //     )
//   //   .click(function () {
//   //     var btn = (step = btn.parents(".modal-body")),
//   //       stepIndex = step.index(),
//   //       pag = ".modal-header span".eq(stepIndex)

//   //     previousStep(step, pag)
//   //   })

//   //   // -------------------------
//   //   // NEXT STEP function
//   //   // -------------------------
//   //   function nextStep($step, $pag) {
//   //     // animate the step out
//   //     $step.addClass("animate-out-to-left")

//   //     // animate the step in
//   //     setTimeout(function () {
//   //       $step
//   //         .removeClass("animate-out-to-left is-showing")
//   //         .next()
//   //         .addClass("animate-in-from-right")
//   //       $pag
//   //         .removeClass("is-active is-invalid")
//   //         .addClass("is-valid")
//   //         .next()
//   //         .addClass("is-active")
//   //     }, 600)

//   //     // after the animation, adjust the classes
//   //     setTimeout(function () {
//   //       $step.next().removeClass("animate-in-from-right").addClass("is-showing")
//   //     }, 1200)
//   //   }

//   //   // -------------------------
//   //   // PREVIOUS STEP function
//   //   // -------------------------
//   //   function previousStep($step, $pag) {
//   //     // animate the step out
//   //     $step.addClass("animate-out-to-right")

//   //     // animate the step in
//   //     setTimeout(function () {
//   //       $step
//   //         .removeClass("animate-out-to-right is-showing")
//   //         .prev()
//   //         .addClass("animate-in-from-left")
//   //       $pag
//   //         .removeClass("is-active is-valid is-invalid")
//   //         .prev()
//   //         .removeClass("is-valid is-invalid")
//   //         .addClass("is-active")
//   //     }, 600)

//   //     // after the animation, adjust the classes
//   //     setTimeout(function () {
//   //       $step.prev().removeClass("animate-in-from-left").addClass("is-showing")
//   //     }, 1200)
//   //   }

//   //   // -------------------------
//   //   // ERROR function
//   //   // -------------------------
//   //   function error($step, $pag) {
//   //     "#activation".addClass("input-error shake")
//   //     $pag
//   //       .addClass("is-invalid")(".message")
//   //       .html(
//   //         '\
//   // 		<div className={"alert alert-danger"}>\
//   // 			<p className={"icon">Error}</p>\
//   // 			<p>This step simulates an incorrect input. For this codepen, it\'s the only field that is checked. Of course, on a real website every input will be checked!</p>\
//   // 			<p>Please enter <code>' +
//   //           key +
//   //           "</code> to proceed</p>\
//   // 		</div>\
//   // 	"
//   //       )

//   //     // after the animation, adjust the classes
//   //     setTimeout(function () {
//   //       "#activation".removeClass("shake")
//   //     }, 500)
//   //   }

//   //   // -------------------------
//   //   // Activate popover
//   //   // -------------------------
//   //   document.ready(function () {
//   //     '[data-toggle="popover"]'.popover()
//   //   })

//   return (
//     <div>
//       {/* <!-- Modal header - contains the pagination--> */}
//       <div className={"modal-header"}>
//         <span className={"is-active"}></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       {/* <!-- Modal bodies--> */}
//       <div className={"modal-bodies"}>
//         {/* <!-- First step--> */}
//         <div className={"modal-body modal-body-step-1 is-showing"}>
//           <ul></ul>
//           <div className={"title"}>Step 1</div>
//           <div className={"description"}>
//             Choose to which package you want to subscribe
//           </div>
//           <form>
//             <div className={"wrapper"}>
//               <div className={"radio"}>
//                 <label>
//                   <input type="radio" name="package" />
//                   <span className={"label-text"}>
//                     Single{" "}
//                     <a
//                       className={"help"}
//                       tabindex="0"
//                       role="button"
//                       data-toggle="popover"
//                       data-trigger="hover"
//                       data-placement="left"
//                       title="Single subscription"
//                       data-content="This is an explanation for the single subscription to tell people what it is."
//                     >
//                       <i
//                         className={"fa fa-question-circle-o fa-lg"}
//                         aria-hidden="true"
//                       ></i>
//                     </a>
//                   </span>
//                 </label>
//               </div>
//               <div className={"radio"}>
//                 <label>
//                   <input type="radio" name="package" />
//                   <span className={"label-text"}>
//                     Family{" "}
//                     <a
//                       className={"help"}
//                       tabindex="0"
//                       role="button"
//                       data-toggle="popover"
//                       data-trigger="hover"
//                       data-placement="left"
//                       title="Family subscription"
//                       data-content="This is an explanation for the family subscription to tell people what it is."
//                     >
//                       <i
//                         className={"fa fa-question-circle-o fa-lg"}
//                         aria-hidden="true"
//                       ></i>
//                     </a>
//                   </span>
//                 </label>
//               </div>
//               <div className={"radio"}>
//                 <label>
//                   <input type="radio" name="package" disabled="disabled" />
//                   <span className={"label-text"}>
//                     Join a Family{" "}
//                     <a
//                       className={"help"}
//                       tabindex="0"
//                       role="button"
//                       data-toggle="popover"
//                       data-trigger="hover"
//                       data-placement="left"
//                       title="Join a family"
//                       data-content="This is an explanation for the the feature to join a family."
//                     >
//                       <i
//                         className={"fa fa-question-circle-o fa-lg"}
//                         aria-hidden="true"
//                       ></i>
//                     </a>
//                   </span>
//                 </label>
//               </div>
//             </div>
//             <div className={"text-center"}>
//               <div className={"button next"}>Next step</div>
//             </div>
//           </form>
//         </div>
//         {/* <!-- Second step--> */}
//         <div className={"modal-body modal-body-step-2"}>
//           <div className={"title"}>Step 2</div>
//           <div className={"description"}>
//             Choose if you want to give this account away as a gift.
//           </div>
//           <form>
//             <div className={"wrapper"}>
//               <div className={"radio"}>
//                 <label>
//                   <input type="radio" name="gift" />
//                   <span className={"label-text"}>No</span>
//                 </label>
//               </div>
//               <div className={"radio"}>
//                 <label>
//                   <input type="radio" name="gift" />
//                   <span className={"label-text"}>Yes</span>
//                 </label>
//               </div>
//             </div>
//             <div className={"text-center fade-in"}>
//               <div className={"button previous"}>Previous step</div>
//               <div className={"button next"}>Next step</div>
//             </div>
//           </form>
//         </div>
//         {/* <!-- Third step--> */}
//         <div className={"modal-body modal-body-step-3"}>
//           <div className={"title"}>Step 3</div>
//           <div className={"description"}>
//             Please enter you personal data, so we know to whom the account
//             should belong.
//           </div>
//           <form>
//             <label>
//               Prename
//               <input type="text" name="prename" placeholder="Max" />
//             </label>
//             <label>
//               Surname
//               <input type="text" name="surname" placeholder="Mustermann" />
//             </label>
//             <label>
//               Birthday
//               <input type="text" name="birthday" placeholder="23.04.1943" />
//             </label>
//           </form>
//           <div className={"text-center"}>
//             <div className={"button previous"}>Previous step</div>
//             <div className={"button next"}>Next step</div>
//           </div>
//         </div>
//         {/* <!-- Forth step--> */}
//         <div className={"modal-body modal-body-step-4"}>
//           <div className={"title"}>Step 4</div>
//           <div className={"description"}>
//             Please enter your e-mail address. We will use this address to send
//             you important information about your account.
//           </div>
//           <form>
//             <label>
//               Email Address
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="email@example.com"
//               />
//             </label>
//           </form>
//           <div className={"text-center"}>
//             <div className={"button previous"}>Previous step</div>
//             <div className={"button next"}>Next step</div>
//           </div>
//         </div>
//         {/* <!-- Fifth step--> */}
//         <div className={"modal-body modal-body-step-5"}>
//           <div className={"title"}>Step 5</div>
//           <div className={"description"}>
//             Choose if you want to receive actual information about our service.
//             We will then send you a newsletter from time to time.
//           </div>
//           <form>
//             <div className={"wrapper"}>
//               <div className={"radio"}>
//                 <label>
//                   <input type="radio" name="gift" />
//                   <span className={"label-text"}>Yes</span>
//                 </label>
//               </div>
//               <div className={"radio"}>
//                 <label>
//                   <input type="radio" name="gift" />
//                   <span className={"label-text"}>No</span>
//                 </label>
//               </div>
//             </div>
//             <div className={"text-center fade-in"}>
//               <div className={"button previous"}>Previous step</div>
//               <div className={"button next"}>Next step</div>
//             </div>
//           </form>
//         </div>
//         {/* <!-- Sixth step--> */}
//         <div className={"modal-body modal-body-step-6"}>
//           <div className={"title"}>Step 6</div>
//           <div className={"description"}>
//             Please enter the activation code, we just sent to your e-mail
//             address.
//           </div>
//           <form>
//             <label>
//               Activation code
//               <input
//                 type="text"
//                 name="activation"
//                 id="activation"
//                 placeholder="szrg3i"
//               />
//             </label>
//           </form>
//           <div className={"message"}></div>
//           <div className={"text-center"}>
//             <div className={"button previous"}>Previous step</div>
//             <div className={"button next"}>Next step</div>
//           </div>
//         </div>
//         {/* <!-- Seventh step--> */}
//         <div className={"modal-body modal-body-step-7"}>
//           <div className={"title"}>Finished</div>
//           <div className={"description"}>
//             Your account was created successfully, you can now log in on:
//           </div>
//           <label> </label>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default New
