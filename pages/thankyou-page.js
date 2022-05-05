import BoxHeader from "../components/Header";
export default function ThankYou() {
  return (
    <div className="tamms__container">
      <div className="tamms__content-box">
        <BoxHeader></BoxHeader>
        <div className="tamms__content-box--body">
          <h1>Evidence Submitted Successfully</h1>
          <p>
            Thank you for submitting evidence of your vehicle damage. Someone
            from our claims team will be in touch with you shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
