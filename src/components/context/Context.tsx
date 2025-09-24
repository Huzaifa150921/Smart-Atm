import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Transaction = {
    id: number;
    date: string;
    description: string;
    amount: number;
};

type BalanceContextType = {
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    transactions: Transaction[];
    addTransaction: (txn: Transaction) => void;
};

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const useBalance = () => {
    const context = useContext(BalanceContext);
    if (!context) {
        throw new Error("UserBalance must be used within a BalanceProvider");
    }
    return context;
};

type BalanceProviderProps = {
    children: ReactNode;
    initialBalance: number;
};

export const BalanceProvider = ({ children, initialBalance }: BalanceProviderProps) => {
    const [balance, setBalance] = useState<number>(initialBalance);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = (txn: Transaction) => {
        setTransactions((prev) => [txn, ...prev]);
    };

    return (
        <BalanceContext.Provider value={{ balance, setBalance, transactions, addTransaction }}>
            {children}
        </BalanceContext.Provider>
    );
};
