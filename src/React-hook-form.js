import "./styles.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  console.log("res", errors);
  const [userinfo, setUserinfo] = useState();
  const onSubmit = (data) => {
    setUserinfo(data);
    console.log(data);
  };
  console.log("res", errors);

  return (
    <div className="App">
      <pre>{JSON.stringify(userinfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="react-hook-form">
          <div className="form-title">
            <h1>Registration Form</h1>
          </div>
          <div className="fields">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter the username"
              {...register("username", { required: "Enter the username" })}
              aria-invalid={errors.username ? "true" : "false"}
            />
          </div>
          <p>{errors.username?.message}</p>
          <div className="fields">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter the Email"
              {...register("email", {
                required: "Enter the email",
                pattern: {
                  value: /^[A-Za-z]/i,
                  message: "Please enter valid email"
                }
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </div>
          <p>{errors.email?.message}</p>
          <div className="fields">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter the Password"
              {...register("password", {
                required: "Enter the Password",
                maxLength: {
                  value: 10,
                  message: "Password should not exceed 10 characters"
                },
                minLength: {
                  value: 4,
                  message: "Password should have atleast 4 characters"
                }
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
          </div>
          <p>{errors.password?.message}</p>
          <button className="button-submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
