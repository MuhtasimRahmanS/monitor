"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./MyTabs.css";
import CompanySignUp from "@/Component/CompanySignUp";
import UserSignUp from "@/Component/UserSignUp";

const Signup = () => {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-center font-bold text-3xl pt-5">Create as a</h1>
      <Tabs>
        <TabList className="font-semibold text-center pt-5">
          <Tab>User Account</Tab>
          <Tab>Company Account</Tab>
        </TabList>

        <TabPanel>
          <UserSignUp router={router} />
        </TabPanel>
        <TabPanel>
          <CompanySignUp router={router} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Signup;
