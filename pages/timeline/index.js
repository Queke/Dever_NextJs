import Link from "next/link";

export default function TimeLine() {
  return (
    <>
      <h1>Esto es Timeline</h1>
      <Link href="/">Go Home</Link>
      <style jsx>{`
        h1 {
          font-size: 36px;
          color: red;
        }
      `}</style>
    </>
  );
}
