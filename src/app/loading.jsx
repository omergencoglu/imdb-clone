import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="loading..." width={500} height={500} />
    </div>
  );
}
