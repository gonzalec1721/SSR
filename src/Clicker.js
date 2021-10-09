import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function Clicker() {
  const [count, setCount] = React.useState(0);

  const incriment = () => {
    console.log("hey");
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <Card>
        {/* <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        /> */}
        <CardBody>
          <CardTitle tag="h5">{count}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Poochie
          </CardSubtitle>
          <CardText>High-end dog walking app</CardText>
          <Button onClick={incriment}>Github</Button>
          <Button onClick={decrement}>Subtract</Button>
        </CardBody>
      </Card>
    </div>
  );
}
