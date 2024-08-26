import { Menu } from "antd";
import { IoMdHome } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SideBarMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      key: "/",
      icon: <IoMdHome />,
      label: <Link to="/">Configuration</Link>,
    },
    {
      key: "/user-access",
      icon: <IoMdHome />,
      label: <Link to="/">User Access</Link>,
      children: [
        {
          key: "/user-access/user-config",
          label: "User Config",
          children: [
            {
              key: "/user-access/userconfig/user-role",
              label: "User Role",
            },
            {
              key: "/user-access/userconfig/user-group",
              label: "User Group",
            },
            {
              key: "/user-access/userconfig/users",
              label: "Users",
            },
          ],
        },
        {
          key: "/user-access/allocations",
          label: "Allocations",
          children: [
            {
              key: "/user-access/allocations/group-users",
              label: "Group Users",
            },
            {
              key: "/user-access/allocations/menu-wise-user-role",
              label: "Menu Wise User Role",
            },
            {
              key: "/user-access/allocations/group-menu-rights",
              label: "Group Menu Rights",
            },
            {
              key: "/user-access/allocations/cost-center-rights",
              label: "Cost Center Rights",
            },
            {
              key: "/user-access/allocations/menu-quick-link",
              label: "Menu Quick Link",
            },
          ],
        },
        {
          key: "/user-access/reports",
          label: "Reports",
          children: [
            {
              key: "/user-access/reports/user-log-report",
              label: "User Log Report",
            },
          ],
        },
      ],
    },
    {
      key: "/hrms",
      icon: <IoMdHome />,
      label: <Link to="/">HRMS</Link>,
      children: [
        {
          key: "/hrms/company",
          label: "Company",
          children: [
            {
              key: "4",
              label: "Manage Company",
            },
            {
              key: "4",
              label: "Company Transfer",
            },
          ],
        },
        {
          key: "/hrms/signatories",
          label: "Signatories",
        },
        {
          key: "/hrms/cc",
          label: "CC",
          children: [
            { key: "/hrms/cc/grade", label: "Grade" },
            { key: "/hrms/cc/stands", label: "Stands" },
            { key: "/hrms/cc/branch", label: "Branch" },
            { key: "/hrms/cc/department", label: "Department" },
            { key: "/hrms/cc/designation", label: "Designation" },
            { key: "/hrms/cc/divison", label: "Devision" },
            { key: "/hrms/cc/unit", label: "Unit" },
            { key: "/hrms/cc/project", label: "Project" },
            { key: "/hrms/cc/category", label: "Category" },
            { key: "/hrms/cc/bank", label: "Bank" },
            { key: "/hrms/cc/language", label: "Language" },
            { key: "/hrms/cc/skill", label: "Skill" },
            { key: "/hrms/cc/custom-fields", label: "Custom Fileds" },
            { key: "/hrms/cc/policy-type", label: "Policy Type" },
            { key: "/hrms/cc/currency", label: "Currency" },
          ],
        },
        {
          key: "/hrms/Employee",
          label: "Employee",
          children: [],
        },
        {
          key: "/hrms/Reports",
          label: "Reports",
          children: [],
        },
      ],
    },
    {
      key: "/leave",
      icon: <IoMdHome />,
      label: <Link to="/leave">Leave</Link>,
      children: [],
    },
    {
      key: "/reimbrsement",
      icon: <IoMdHome />,
      label: <Link to="/reimbrsement">Reimbrsement</Link>,
      children: [],
    },
    {
      key: "/loan",
      icon: <IoMdHome />,
      label: <Link to="/loan">Loan</Link>,
      children: [],
    },
    {
      key: "/payroll",
      icon: <IoMdHome />,
      label: <Link to="/payroll">Payroll</Link>,
      children: [
        {
          key: "/payroll/component-setup",
          label: "Component Setup",
          children: [
            {
              key: "/payroll/component-setup/salary-heads",
              label: "Salary Heads",
            },
            {
              key: "/payroll/component-setup/summary-vaariables",
              label: "Summary Variables",
            },
            {
              key: "/payroll/component-setup/define-slab",
              label: "Define Slab",
            },
            {
              key: "/payroll/component-setup/standard-heads",
              label: "Standard Heads",
            },
          ],
        },
        {
          key: "/payroll/salary-structure",
          label: "Salary Structure",
          children: [
            {
              key: "/payroll/salary-structure/",
              label: "",
            },
          ],
        },
        {
          key: "/payroll/ctc",
          label: "CTC",
          children: [
            {
              key: "/payroll/ctc/",
              label: "",
            },
          ],
        },
        {
          key: "/payroll/salary-process",
          label: "Salary Process",
          children: [
            {
              key: "/payroll/salary-process/",
              label: "",
            },
          ],
        },
        {
          key: "/payroll/salary-slips",
          label: "Salary Slips",
          children: [
            {
              key: "/payroll/salary-slips/",
              label: "",
            },
          ],
        },
        {
          key: "/payroll/payment-option",
          label: "Payment Option",
          children: [
            {
              key: "/payroll/payment-option/",
              label: "",
            },
          ],
        },
        {
          key: "/payroll/payment-authorization",
          label: "Payment Authorization",
        },
        {
          key: "/payroll/supplementary",
          label: "Supplementary",
          children: [
            {
              key: "/payroll/supplementary/",
              label: "",
            },
          ],
        },
        {
          key: "/payroll/arrears",
          label: "Arrears",
          children: [
            {
              key: "/payroll/arrears/",
              label: "",
            },
          ],
        },
        {
          key: "/payroll/final-statement",
          label: "Final Statement",
          children: [
            {
              key: "/payroll/final-statement/",
              label: "",
            },
          ],
        },
        {
          key: "/payroll/bonus-calculation",
          label: "Bonus Calculation",
        },
        {
          key: "/payroll/gratuity",
          label: "Gratuity",
        },
        {
          key: "/payroll/financial-reports",
          label: "Financial Reports",
          children: [
            {
              key: "/payroll/financial-reports/",
              label: "",
            },
          ],
        },
        {
          key: "/payroll/comparison-reports",
          label: "Comparison Reports",
          children: [
            {
              key: "/payroll/comparison-reports/",
              label: "",
            },
          ],
        },
      ],
    },
    {
      key: "/income-tax",
      icon: <IoMdHome />,
      label: <Link to="/income-tax">Income Tax</Link>,
      children: [],
    },
    {
      key: "/report-writer",
      icon: <IoMdHome />,
      label: <Link to="/report-writer">Report Writer</Link>,
      children: [],
    },
    {
      key: "/satutory",
      icon: <IoMdHome />,
      label: <Link to="/satutory">Satutory</Link>,
      children: [],
    },
  ];

  return (
    <div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[currentPath]}
        items={menuItems}
      />
    </div>
  );
};

export default SideBarMenu;
