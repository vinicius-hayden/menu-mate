'use client'
import { Button, Form, Card, Alert } from "react-bootstrap"; 
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!password || !user) {
      setError("Plese Bubi Jubi!");
    }

  };  

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "50vh" }}
    >
      <Card style={{ width: "400px", border: "none"}}>
        <Card.Body>
          <h2 className="text-center">Login</h2>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>} 
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername" className="mt-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                required
                value={user}
                onChange={(e) => setUser(e.target.value)} 
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>
            <Button variant="primary" className="mt-4 w-100" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}