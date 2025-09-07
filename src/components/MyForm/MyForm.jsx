import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./MyForm.module.css";

function MyForm() {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Name is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    phone: Yup.string()
      .required("Phone number is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
    comment: Yup.string().max(200, "Maximum 200 characters"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        phone: "",
        comment: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form data:", values);
        alert("Form submitted successfully!");
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <div className={styles.fieldWrapper}>
            <Field
              className={styles.input}
              type="text"
              name="username"
              placeholder="Your name"
            />
            {errors.username && touched.username && (
              <div className={styles.error}>{errors.username}</div>
            )}
          </div>

          <div className={styles.fieldWrapper}>
            <Field
              className={styles.input}
              type="email"
              name="email"
              placeholder="Your email"
            />
            {errors.email && touched.email && (
              <div className={styles.error}>{errors.email}</div>
            )}
          </div>

          <div className={styles.fieldWrapper}>
            <Field
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="Phone number"
            />
            {errors.phone && touched.phone && (
              <div className={styles.error}>{errors.phone}</div>
            )}
          </div>

          <div className={styles.fieldWrapper}>
            <Field
              className={styles.textarea}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
            {errors.comment && touched.comment && (
              <div className={styles.error}>{errors.comment}</div>
            )}
          </div>

          <button type="submit" className={styles.btn}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;
