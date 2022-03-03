import { useRouter } from "next/router";
import React from "react";

const Car = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Hello {id}</h1>
    </div>
  );
};

export default Car;
