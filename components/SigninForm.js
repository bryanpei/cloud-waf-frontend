import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const SigninForm = ({ isSignUp = false, errorMsg, onSubmit }) => {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email"/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        {errorMsg &&
        <Alert key="warning" variant="warning">
          {errorMsg}
        </Alert>}

      </Form>
    </Container>

  )
}

export default SigninForm
