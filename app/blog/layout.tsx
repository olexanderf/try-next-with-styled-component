import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: 'Blog | Next learning prj',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
