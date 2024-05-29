
import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";
export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const Balance = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);

  return (
    <div className="dashboard-container">
      <h1> Welcome {user?.firstName}! Track Your Money</h1>
      <FinancialRecordForm />
      <div>Balance: {Balance}</div>
      <FinancialRecordList />
    </div>
  );
};