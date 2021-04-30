import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./formstyles.css";
import "./formstyles-custom.css";


const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;import styled from "@emotion/styled";

  }import styled from "@emotion/styled";

  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </div>
  );
};


const Wrapper = styled.div`
  
display: flex;
justify-content: center ;
  
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;



// And now we can use these
const Basic = () => {
  return (


    <Wrapper>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "" // added for our select
        }}
        validationSchema={Yup.object({
          Name: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          Contact: Yup.string()
            .max(13, "Please enter a valid phone number"),
           
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            // specify the set of valid values for job type
            // @see http://bit.ly/yup-mixed-oneOf
            .oneOf(
              ["fashion", "health", "design","enter","tech", "life","food","social"],
              "Invalid Segment"
            )
            .required("Required")
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="Name"
            name="firstName"
            type="text"
            placeholder="Rishi"
          />
          <MyTextInput
            label="Contact Number"
            name="Contact"
            type="text"
            placeholder="+918861183024"
          />

          <MyTextInput
            label="City"
            name="Name"
            type="text"
            placeholder="Bengaluru"
          />
           <MyTextInput
            label="Social Media Account"
            name="Name2"
            type="text"
            placeholder="https://www.instagram.com/the_holistic_consultant/"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="rishiprattipati@gmail.com"
          />
          <MySelect label="Segment" name="jobType">
            <option value="">Select a segment</option>
            <option value="fashion">Fashion & Beauty</option>
            <option value="health">Health & Fitness</option>
            <option value="design">Design & Memes</option>
            <option value="enter">Entertainment</option>
            <option value="tech">Business & Technology</option>
            <option value="life">Travel & Lifestyle</option>
            <option value="food">Food & Culture</option>
            <option value="social">Sustainability & Social Activism</option>
          </MySelect>
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Wrapper>
  );
};
export default Basic;
