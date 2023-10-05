import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./heroSection.css";
import { Button, Text } from "@chakra-ui/react";
import RegistrationModal from "../../../../component/Modal";
import CourseBanner from "../../../../component/CourseBanner";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmitForm = async (data) => {
    try {
      setIsLoading(true);

      const res = await axios.post(baseUrl, data);
      console.log(res);

      if (res.status === 201) {
        setIsSuccessModalOpen(true);
      } else {
        setIsErrorModalOpen(true);
      }
    } catch (error) {
      setIsErrorModalOpen(true);
    }

    setIsLoading(false);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
    reset(); // Clear the form
  };

  const handleErrorModalClose = () => {
    setIsErrorModalOpen(false);
  };

  return (
    <section className="hero_section">
      <div className="hero_section-content cc-container">
        <div className="hero_section-header">
          <h2>Beginners Frontend Development Course (Online)</h2>
          <p>
            Learn all you need to start a career as a Frontend Developer and
            start building interesting and simple websites and landing pages
            while learning the fundamentals of Web Development.
          </p>
        </div>

        <div className="form-control">
          <div className="before">

          </div>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <p>
              Register to learn more about the program pricing and curriculum
            </p>
            <div className="form-user">
              <div>
              <input
                type="text"
                placeholder="First Name"
                className="text"
                id="firstName"
                name="firstName"
                {...register("firstName", {
                  required: "First Name is required",
                  pattern: {
                    value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                    message: (
                        <Text as={`span`} className="errorMsg">Name must start with <br/> capital letter</Text>
                    )
                       
                  },
                })}
              />
              {errors.firstName && (
                <span className="errorMsg">{errors.firstName.message}</span>
              )}
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="text"
                  id="lastName"
                  name="lastName"
                  {...register("lastName", {
                    required: "Last Name is required",
                    pattern: {
                      value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                      message: (
                        <Text as={`span`} className="errorMsg">Name must start with <br/> capital letter</Text>
                    )
                        
                    },
                  })}
                />
                {errors.lastName && (
                  <span className="errorMsg">{errors.lastName.message}</span>
                )}
              </div>
            </div>

            <div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
                      message: "Email is not valid.",
                    },
                  })}
                />
                {errors.email && (
                  <span className="errorMsg">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="tel"
                  name="phoneNumber"
                  {...register("phoneNumber", {
                    required: "Enter phone number",
                    pattern: {
                      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/,
                      message: (
                        <Text as={`span`} className="errorMsg">Phone number must not contain text</Text>
                      )
                    },
                  })}
                />
                <div>
                {errors.phoneNumber && (
                  <span className="errorMsg">{errors.phoneNumber.message}</span>
                )}
              </div>
            </div>

            <Button
              type={`submit`}
              isLoading={isLoading}
              loadingText="Getting Package..."
              _hover={{ bgColor: `blue.300`, opacity: 1 }}
              className="button"
            >
              Get Program Package
            </Button>
          </form>
        </div>
      </div>

      <RegistrationModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessModalClose}
        isSuccess={true}
        isError={false}
        heading={`Package Sent !!.`}
        text={`You will receive the curriculum in your email shortly`}
      />

      {/* Error Modal */}
      <RegistrationModal
        isOpen={isErrorModalOpen}
        onClose={handleErrorModalClose}
        isSuccess={false}
        isError={true}
      />

      <CourseBanner />
    </section>
  );
};

export default HeroSection;

// const HeroSection = () => {
//   return (
//     <div>HeroSection</div>
//   )
// }

// export default HeroSection
