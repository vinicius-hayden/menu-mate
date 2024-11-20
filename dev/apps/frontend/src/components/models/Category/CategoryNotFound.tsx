import { Button } from "react-bootstrap";

export default function CategoryNotFound() {
  return (
    <div className="flex items-start justify-center h-screen pt-20">
      <div className="text-center space-y-4">
        <h1>Sorry, we couldn&apos;t find this Category</h1>
        <h3>Try our other Categories!</h3>
        <Button href="/" className="btn-primary">
          Click Here
        </Button>
      </div>
    </div>
  );
}
