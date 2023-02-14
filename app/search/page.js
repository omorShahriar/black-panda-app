import React from "react";

const page = ({ searchParams }) => {
  const query = searchParams.get("query") || null;
  return <div>page {query}</div>;
};

export default page;
