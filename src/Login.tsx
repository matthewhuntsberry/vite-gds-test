import React from "react";
import { Button, FormLabel, Input, Label } from "@kofile/gds-react";
import { Eye, EyeSlash } from "@phosphor-icons/react";

function Login() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  function validateForm() {
    if (email === "" || password === "") {
      return false;
    }

    if (password.length < 8) {
      return false;
    }

    return true;
  }
  return (
    <form>
      <FormLabel message="You need to login in to access your account" required>
        Login
      </FormLabel>
      <div className="grid gap-md">
        <Input error={error}>
          <Input.LeftAddon>
            <Label htmlFor="email">Email</Label>
          </Input.LeftAddon>
          <Input.Input
            id="email"
            placeholder="me@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </Input>
        <Input error={error}>
          <Input.LeftAddon>
            <Label htmlFor="password">Password</Label>
          </Input.LeftAddon>
          <Input.Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Must have at least 8 characters"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Input.RightAddon>
            <Button
              variant="neutral"
              background="outlined"
              rounded="right"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <Eye size={24} /> : <EyeSlash size={24} />}
            </Button>
          </Input.RightAddon>
        </Input>

        <Button
          disabled={!validateForm()}
          onClick={(e) => {
            e.preventDefault();
            if (!validateForm()) {
              setError(true);
            } else {
              alert(`Email: ${email}\nPassword: ${password}`);
              setEmail("");
              setPassword("");
            }
          }}
          background="outlined"
          variant="neutral"
        >
          Login
        </Button>
      </div>
    </form>
  );
}

export default Login;
