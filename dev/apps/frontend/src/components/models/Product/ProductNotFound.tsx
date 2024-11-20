import { Button } from "react-bootstrap";

export default function ProductNotFound() {
  return (
    <div className="flex items-start justify-center h-screen pt-20">
      <div className="text-center space-y-4">
        <h1>Sorry, we couldn&apos;t find this Product</h1>
        <h3>Try our other Categories!</h3>
        <Button href="/menu" className="btn-primary">
          Click Here
        </Button>
      </div>
    </div>
  );
}
