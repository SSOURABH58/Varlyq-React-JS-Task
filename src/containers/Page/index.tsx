import React from 'react';

const Page: React.FC<IProps> = ({ children }) => {
    return <div className="page">{children}</div>;
};
interface IProps {
    children: React.ReactNode;
}

export default Page;
