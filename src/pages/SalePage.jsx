import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";

const SalePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPage={"Sale Page"} />
      </Container>
    </section>
  );
};

export default SalePage;
