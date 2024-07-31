"use client";
import { Accordion } from "flowbite-react";

const Faq = () => {
  return (
    <div className="container mx-auto py-20 md:px-0 px-4">
      <div className="text-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="section-title"
        >
          Frequently Asked Questions
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="py-5 md:text-lg text-base font-medium text-[#172C56]"
        >
          Find answers to the most common questions about Monitorfly
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>What is Monitorfly?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Monitorfly is a comprehensive work monitoring software designed
                to help teams track, manage, and optimize their workflow. It
                includes features such as real-time tracking, task management,
                collaboration tools, productivity analytics, and more.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              How do I get started with Monitorfly?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Getting started is easy! Simply sign up for a free account on
                our website, download the software for your preferred platform,
                and follow the installation instructions. You can start using
                all the features right away with our 14-day free trial.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What platforms does Monitorfly support?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Monitorfly is available for Windows. You can download the
                software from our website.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Is my data secure with Monitorfly?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes, we take data security very seriously. Monitorfly uses
                advanced encryption protocols and regular backups to ensure your
                data is safe and protected.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              How can I contact customer support?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Our customer support team is available 24/7 to assist you. You
                can reach us via email, phone, or live chat. Visit our Support
                Center on the website for more details.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
