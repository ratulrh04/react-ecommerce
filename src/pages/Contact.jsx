import styled from 'styled-components';
import { useFormik } from 'formik';
import { singUpSchema } from '../schemas';

const Contact = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        onSubmit: (values, action) => {
            console.log("Form Values:", values);
            action.resetForm();
        },
        validationSchema: singUpSchema,
    });

    return (
        <FormWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <form onSubmit={handleSubmit}>
                            <div className="input-block">
                                <label htmlFor='name' className='input-label'>Name</label>
                                <input
                                    type="text"
                                    autoComplete='off'
                                    name='name'
                                    id='name'
                                    placeholder='Name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>) : null}
                            </div>
                            <div className="input-block">
                                <label htmlFor='email' className='input-label'>Email</label>
                                <input
                                    type="email"
                                    autoComplete='off'
                                    name='email'
                                    id='email'
                                    placeholder='Email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}
                            </div>
                            <div className="input-block">
                                <label htmlFor='password' className='input-label'>Password</label>
                                <input
                                    type="password"
                                    autoComplete='off'
                                    name='password'
                                    id='password'
                                    placeholder='Password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null}
                            </div>
                            <div className="input-block">
                                <label htmlFor='confirm_password' className='input-label'>Confirm Password</label>
                                <input
                                    type="password"
                                    autoComplete='off'
                                    name='confirm_password'
                                    id='confirm_password'
                                    placeholder='Confirm Password'
                                    value={values.confirm_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.confirm_password && touched.confirm_password ? (<p className='form-error'>{errors.confirm_password}</p>) : null}
                            </div>
                            <div className="model-buttons">
                                <a href="#" className=''>
                                    Want to register using Gmail ?
                                </a>
                                <button className='input-button' type='submit'>
                                    Registration
                                </button>
                            </div>
                        </form>
                        <a href="sing-up">
                            Already have an account? <a href="#">Sign In Now</a>
                        </a>
                    </div>
                </div>
            </div>
        </FormWrapper>
    );
};

export default Contact;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  background: #f5f7fa;

  .container {
    background-color: #ffffff;
    padding: 2rem 2.5rem;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
  }

  .input-block {
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: column;

    .input-label {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #333;
    }

    input {
      padding: 0.75rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
      }
    }

    .form-error {
      color: red;
      font-size: 0.85rem;
      margin-top: 0.3rem;
    }
  }

  .model-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1.5rem;

    a {
      color: #007bff;
      text-decoration: none;
      font-size: 0.9rem;

      &:hover {
        text-decoration: underline;
      }
    }

    .input-button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  a {
    display: block;
    text-align: center;
    margin-top: 1.5rem;
    color: #007bff;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 576px) {
    .container {
      padding: 2rem 1.2rem;
    }

    .model-buttons {
      flex-direction: column;
      gap: 1rem;
    }

    .input-button {
      width: 100%;
    }
  }
`;

