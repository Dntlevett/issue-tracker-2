import { useRef } from "react";
import ContactForm from "../Components/ContactForm/ContactForm";
import Issues from "../Components/Issues/Issues";
import Nav from "../Components/Nav/Nav";

function IssuesPage() {
  const formRef = useRef(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <>
      <Nav />

      <Issues onNewIssueClick={scrollToForm} />
      <div ref={formRef}>
        <ContactForm />
      </div>
    </>
  );
}
export default IssuesPage;
